
emailjs.init("pjPi7v_cVKISBGkLc");

document.getElementById("registroEmpresa").addEventListener("submit", function (e) {
  e.preventDefault();
  emailjs.send("service_31z25np", "template_1kik99i", {
    nombre_empresa: document.getElementById("nombreEmpresa").value,
    liendre: document.getElementById("nit").value,
    ubicacion: document.getElementById("ubicacion").value,
    sector: document.getElementById("sector").value
  }).then(function () {
    alert("✅ Registro enviado correctamente");
    document.getElementById("registroEmpresa").reset();
  }, function (error) {
    alert("❌ Error al enviar registro: " + JSON.stringify(error));
  });
});

const { jsPDF } = window.jspdf;

function generarCertificado() {
  const doc = new jsPDF();
  const empresa = document.getElementById("empresaCert").value;
  doc.text("CERTIFICADO DE APROVECHAMIENTO", 20, 20);
  doc.save(`Certificado_${empresa}.pdf`);
}

function generarCaracterizacion() {
  const doc = new jsPDF();
  const empresa = document.getElementById("empresaCar").value;
  const descripcion = document.getElementById("descripcionResiduos").value;
  doc.text("CARACTERIZACIÓN POR RESIDUOS", 20, 20);
  doc.text(descripcion, 20, 30);
  doc.save(`Caracterizacion_${empresa}.pdf`);
}
