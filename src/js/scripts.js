document.addEventListener("DOMContentLoaded", () => {
    const accordionBodies = document.querySelectorAll(".accordion-body");
  
    accordionBodies.forEach(body => {
      const section = body.dataset.section;
      if (section) {
        fetch(`components/${section}.html`)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Failed to load components/${section}.html`);
            }
            return response.text();
          })
          .then(html => {
            body.innerHTML = html;
            initializeComponentScripts(body); // Initialize JS for that component
          })
          .catch(error => {
            body.innerHTML = `<div class="text-danger">Error: ${error.message}</div>`;
            console.error(error);
          });
      }
    });
  });
  
  function initializeComponentScripts(container) {
    // ✅ Commodity Dropdowns Logic
    const commodities = [
      "Petroleum Crude",
      "ATF-Aviation Turbine Fuel",
      "Diesel",
      "Petrol",
      "Liquor Fit for Human Consumption",
      "Natural Gases"
    ];
  
    const selects = container.querySelectorAll(".commodity-select");
  
    if (selects.length) {
      selects.forEach(select => {
        select.innerHTML = `<option disabled selected value="">Select</option>` +
          commodities.map(item => `<option value="${item}">${item}</option>`).join("");
      });
  
      selects.forEach(select => {
        select.addEventListener("change", () => {
          const selectedValues = Array.from(selects)
            .map(s => s.value)
            .filter(val => val !== "");
  
          selects.forEach(s => {
            Array.from(s.options).forEach(option => {
              if (option.value !== "") {
                option.disabled = selectedValues.includes(option.value) && s.value !== option.value;
              }
            });
          });
        });
      });
    }

    // ✅ Bank Details Form Handling Logic
const bankSaveBtn = container.querySelector("#bankSaveBtn");
const bankClearBtn = container.querySelector("#bankClearBtn");
const bankDeleteBtn = container.querySelector("#bankDeleteBtn");
const bankTableBody = container.querySelector("#bankDetailsTable tbody");

let bankSrNo = bankTableBody?.rows.length + 1 || 1;

if (bankSaveBtn && bankClearBtn && bankDeleteBtn && bankTableBody) {
  bankSaveBtn.addEventListener("click", saveBankRow);
  bankClearBtn.addEventListener("click", clearBankForm);
  bankDeleteBtn.addEventListener("click", deleteBankRow);
}

function validateIFSC(ifsc) {
  const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/i;
  return ifscRegex.test(ifsc);
}

function saveBankRow() {
  const bankName = container.querySelector("#bankName")?.value.trim();
  const branchName = container.querySelector("#branchName")?.value.trim();
  const accountType = container.querySelector("#accountType")?.value;
  const accountNumber = container.querySelector("#accountNumber")?.value.trim();
  const ifscCode = container.querySelector("#ifscCode")?.value.trim().toUpperCase();

  if (!bankName || !branchName || !accountType || !accountNumber || !ifscCode) {
    alert("Please fill out all bank details.");
    return;
  }

  if (!validateIFSC(ifscCode)) {
    alert("Invalid IFSC code. Example: HDFC0001234");
    return;
  }

  const row = bankTableBody.insertRow();
  row.innerHTML = `
    <td><input type="checkbox" /></td>
    <td><button type="button" class="btn btn-sm btn-primary edit-btn">Edit</button></td>
    <td>${bankSrNo++}</td>
    <td>${bankName}</td>
    <td>${branchName}</td>
    <td>${accountType}</td>
    <td>${accountNumber}</td>
    <td>${ifscCode}</td>
  `;

  clearBankForm();
}

function clearBankForm() {
  container.querySelector("#bankName").value = "";
  container.querySelector("#branchName").value = "";
  container.querySelector("#accountType").selectedIndex = 0;
  container.querySelector("#accountNumber").value = "";
  container.querySelector("#ifscCode").value = "";
}

function deleteBankRow() {
  const checkboxes = bankTableBody.querySelectorAll("input[type='checkbox']");
  for (let i = checkboxes.length - 1; i >= 0; i--) {
    if (checkboxes[i].checked) {
      bankTableBody.deleteRow(i);
      bankSrNo--;
    }
  }

  const rows = bankTableBody.rows;
  for (let i = 0; i < rows.length; i++) {
    rows[i].cells[2].textContent = i + 1;
  }

  bankSrNo = rows.length + 1;
}

    
  
    // ✅ Business Form Handling Logic
    const saveBtn = container.querySelector("#saveBtn");
    const clearBtn = container.querySelector("#clearBtn");
    const deleteBtn = container.querySelector("#deleteBtn");
    const tableBody = container.querySelector("#businessTable tbody");
  
    let srNo = tableBody?.rows.length + 1 || 1;
  
    if (saveBtn && clearBtn && deleteBtn && tableBody) {
      saveBtn.addEventListener("click", saveRow);
      clearBtn.addEventListener("click", clearForm);
      deleteBtn.addEventListener("click", deleteRow);
    }
  
    function validatePAN(pan) {
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i;
      return panRegex.test(pan);
    }
  
    function saveRow() {
      const district = container.querySelector("#district")?.value;
      const name = container.querySelector("#businessName")?.value.trim();
      const constitution = container.querySelector("#constitution")?.value;
      const trade = container.querySelector("#tradeName")?.value.trim();
      const pan = container.querySelector("#pan")?.value.trim().toUpperCase();
      const nature = container.querySelector("#nature")?.value;
  
      if (!district) {
        alert("Please select the District where registration is sought.");
        return;
      }
      if (!name) {
        alert("Please enter the Name & Style of the Business.");
        return;
      }
      if (!constitution) {
        alert("Please select the Constitution of the Business.");
        return;
      }
      if (!pan) {
        alert("Please enter the PAN of the Business/Proprietor.");
        return;
      }
      if (!validatePAN(pan)) {
        alert("Please enter a valid PAN number (e.g., ABCDE1234F).");
        return;
      }
      if (!nature) {
        alert("Please select the Nature of Business.");
        return;
      }
  
      const row = tableBody.insertRow();
      row.innerHTML = `
        <td><input type="checkbox" /></td>
        <td>${srNo++}</td>
        <td>${name}</td>
        <td>${constitution}</td>
        <td>${trade}</td>
        <td>${pan}</td>
        <td>${nature}</td>
      `;
  
      clearForm();
    }
  
    function clearForm() {
      container.querySelector("#district").selectedIndex = 0;
      container.querySelector("#businessName").value = "";
      container.querySelector("#constitution").selectedIndex = 0;
      container.querySelector("#tradeName").value = "";
      container.querySelector("#pan").value = "";
      container.querySelector("#nature").selectedIndex = 0;
    }
  
    function deleteRow() {
      const checkboxes = tableBody.querySelectorAll("input[type='checkbox']");
      for (let i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].checked) {
          tableBody.deleteRow(i);
          srNo--;
        }
      }
  
      const rows = tableBody.rows;
      for (let i = 0; i < rows.length; i++) {
        rows[i].cells[1].textContent = i + 1;
      }
  
      srNo = rows.length + 1;
    }
    function toggleLicenseInput() {
        const select = document.getElementById("licenseRequired");
        const inputContainer = document.getElementById("licenseInputContainer");
    
        if (select.value === "Yes") {
          inputContainer.classList.remove("d-none");
        } else {
          inputContainer.classList.add("d-none");
        }
      }
  }
  