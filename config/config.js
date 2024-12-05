module.exports = {
    port: 3001,
    archiveServiceHost: "http://dmss-archive-services:8090/api/",	
    createDocAPI: "http://dmss-archive-services:8090/api/document/create",
    formFillAPI: "http://dmss-container-and-signature-services:8092/api/forms/fill/template/application",
    templateLocation: "/dev/apps/padsign/psapp/client/public/template",
    downloadDocAPI: "http://dmss-archive-services:8090/api/document/",
    defaultDocName: "template.pdf",
    defaultTMPFolder: "./tmp/",
    docFolder: "/PSDOCS/out/",
    readOnlyPDFFolder: "/PSDOCS/in/",
	enablePCValidation: false,
    defaultDocJSON: {
      objectName: 'template',
      contentType: 'application/pdf',
      documentType: 'DMSSDoc',
      documentFilename: 'template.pdf'
    }
  };