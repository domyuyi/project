const countryPhoneCodes = {
  "Peru": { "code": "+51", "pattern": "[0-9]{9}", "title": "Debe contener 9 dígitos numéricos" },
  "USA": { "code": "+1", "pattern": "[0-9]{10}", "title": "Debe contener 10 dígitos numéricos" },
  "UK": { "code": "+44", "pattern": "[0-9]{10}", "title": "Debe contener 10 dígitos numéricos" },
  "Argentina": { "code": "+54", "pattern": "[0-9]{10}", "title": "Debe contener 10 dígitos numéricos" },
  "Brazil": { "code": "+55", "pattern": "[0-9]{11}", "title": "Debe contener 11 dígitos numéricos" },
  "Canada": { "code": "+1", "pattern": "[0-9]{10}", "title": "Debe contener 10 dígitos numéricos" },
  "Chile": { "code": "+56", "pattern": "[0-9]{9}", "title": "Debe contener 9 dígitos numéricos" },
  "China": { "code": "+86", "pattern": "[0-9]{11}", "title": "Debe contener 11 dígitos numéricos" },
  "France": { "code": "+33", "pattern": "[0-9]{9}", "title": "Debe contener 9 dígitos numéricos" },
  "Germany": { "code": "+49", "pattern": "[0-9]{10}", "title": "Debe contener 10 dígitos numéricos" },
  "India": { "code": "+91", "pattern": "[0-9]{10}", "title": "Debe contener 10 dígitos numéricos" },
  "Italy": { "code": "+39", "pattern": "[0-9]{10}", "title": "Debe contener 10 dígitos numéricos" },
  "Japan": { "code": "+81", "pattern": "[0-9]{10}", "title": "Debe contener 10 dígitos numéricos" },
  "Mexico": { "code": "+52", "pattern": "[0-9]{10}", "title": "Debe contener 10 dígitos numéricos" },
  "Spain": { "code": "+34", "pattern": "[0-9]{9}", "title": "Debe contener 9 dígitos numéricos" },
  "Australia": { "code": "+61", "pattern": "[0-9]{9}", "title": "Debe contener 9 dígitos numéricos" }
};

// Función para llenar el selector de países
function populateCountrySelect() {
  const select = document.getElementById('pais');
  for (const country in countryPhoneCodes) {
      const option = document.createElement('option');
      option.value = country;
      option.text = country;
      select.appendChild(option);
  }
}

// Función para actualizar la validación del número de teléfono
function updatePhoneValidation() {
  const select = document.getElementById('pais');
  const telefono = document.getElementById('telefono');
  const selectedCountry = select.value;

  if (countryPhoneCodes[selectedCountry]) {
      const { pattern, title } = countryPhoneCodes[selectedCountry];
      telefono.pattern = pattern;
      telefono.title = title;
  }
}

// Llenar el selector de países al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  populateCountrySelect();
  document.getElementById('pais').addEventListener('change', updatePhoneValidation);
  document.getElementById('paymentForm').addEventListener('submit', function(event) {
      let form = event.target;
      if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
      }
      form.classList.add('was-validated');
    },false);
});
