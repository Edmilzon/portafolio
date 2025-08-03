// Configuración de EmailJS
export const EMAILJS_CONFIG = {
    serviceId: "service_uqbzdm9",
    templateId: "template_2b5k5fq", 
    publicKey: "8hh0F9LSeO-sdvYGg"
};

// Interfaz para los datos del formulario
export interface ContactFormData {
    nombre: string;
    email: string;
    asunto: string;
    mensaje: string;
}

// Función para crear la estructura del mensaje HTML
export const createEmailHTML = (data: ContactFormData): string => {
    return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nuevo mensaje desde tu portafolio</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #f8f9fa;
                }
                .container {
                    background-color: #ffffff;
                    border-radius: 10px;
                    padding: 30px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding-bottom: 20px;
                    border-bottom: 3px solid #667eea;
                }
                .header h1 {
                    color: #667eea;
                    margin: 0;
                    font-size: 28px;
                    font-weight: 600;
                }
                .header p {
                    color: #666;
                    margin: 10px 0 0 0;
                    font-size: 16px;
                }
                .contact-info {
                    background-color: #f8f9fa;
                    border-radius: 8px;
                    padding: 20px;
                    margin-bottom: 25px;
                    border-left: 4px solid #667eea;
                }
                .contact-info h2 {
                    color: #333;
                    margin: 0 0 15px 0;
                    font-size: 20px;
                    font-weight: 600;
                }
                .info-row {
                    display: flex;
                    margin-bottom: 12px;
                    align-items: center;
                }
                .info-label {
                    font-weight: 600;
                    color: #555;
                    min-width: 80px;
                    margin-right: 10px;
                }
                .info-value {
                    color: #333;
                    flex: 1;
                }
                .message-section {
                    background-color: #ffffff;
                    border: 1px solid #e9ecef;
                    border-radius: 8px;
                    padding: 20px;
                    margin-top: 20px;
                }
                .message-section h3 {
                    color: #333;
                    margin: 0 0 15px 0;
                    font-size: 18px;
                    font-weight: 600;
                }
                .message-content {
                    background-color: #f8f9fa;
                    padding: 15px;
                    border-radius: 6px;
                    border-left: 3px solid #667eea;
                    white-space: pre-wrap;
                    line-height: 1.5;
                }
                .footer {
                    text-align: center;
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px solid #e9ecef;
                    color: #666;
                    font-size: 14px;
                }
                .badge {
                    display: inline-block;
                    background-color: #667eea;
                    color: white;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: 500;
                    margin-left: 8px;
                }
                @media (max-width: 600px) {
                    body {
                        padding: 10px;
                    }
                    .container {
                        padding: 20px;
                    }
                    .info-row {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .info-label {
                        margin-bottom: 5px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>📧 Nuevo Mensaje de Contacto</h1>
                    <p>Has recibido un nuevo mensaje desde tu portafolio web</p>
                </div>
                
                <div class="contact-info">
                    <h2>👤 Información del Remitente</h2>
                    <div class="info-row">
                        <span class="info-label">Nombre:</span>
                        <span class="info-value">${data.nombre}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Email:</span>
                        <span class="info-value">${data.email}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Asunto:</span>
                        <span class="info-value">${data.asunto}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Fecha:</span>
                        <span class="info-value">${new Date().toLocaleString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}</span>
                    </div>
                </div>
                
                <div class="message-section">
                    <h3>💬 Mensaje</h3>
                    <div class="message-content">${data.mensaje}</div>
                </div>
                
                <div class="footer">
                    <p>
                        Este mensaje fue enviado automáticamente desde tu portafolio web
                        <span class="badge">Portafolio Web</span>
                    </p>
                    <p style="margin-top: 10px; font-size: 12px; color: #999;">
                        Responder a: ${data.email}
                    </p>
                </div>
            </div>
        </body>
        </html>
    `;
};

// Función para crear el mensaje en texto plano
export const createEmailText = (data: ContactFormData): string => {
    return `
NUEVO MENSAJE DESDE TU PORTAFOLIO WEB
========================================

INFORMACIÓN DEL REMITENTE:
--------------------------
Nombre: ${data.nombre}
Email: ${data.email}
Asunto: ${data.asunto}
Fecha: ${new Date().toLocaleString('es-ES')}

MENSAJE:
--------
${data.mensaje}

========================================
Enviado automáticamente desde tu portafolio web
Responder a: ${data.email}
    `.trim();
};

// Función para preparar los parámetros de EmailJS con estructura mejorada
export const prepareEmailJSParams = (data: ContactFormData) => {
    // Crear un mensaje estructurado que funcione con el template básico
    const structuredMessage = `
📧 NUEVO MENSAJE DESDE TU PORTAFOLIO WEB

👤 INFORMACIÓN DEL REMITENTE:
Nombre: ${data.nombre}
Email: ${data.email}
Asunto: ${data.asunto}
Fecha: ${new Date().toLocaleString('es-ES')}

💬 MENSAJE:
${data.mensaje}

---
Enviado automáticamente desde tu portafolio web
Responder a: ${data.email}
    `.trim();

    return {
        from_name: data.nombre,
        from_email: data.email,
        subject: `[Portafolio] ${data.asunto}`,
        message: structuredMessage,
        to_email: "edmilzon.luna@gmail.com"
    };
}; 