"use client";

import { useState } from "react";
import Button from "./button";
import emailjs from "@emailjs/browser";
import { 
    EMAILJS_CONFIG, 
    ContactFormData, 
    prepareEmailJSParams 
} from "./contactMessage";

interface EmailFormProps {
    className?: string;
}

export default function EmailForm({ className = "" }: EmailFormProps) {
    const [formData, setFormData] = useState<ContactFormData>({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: ""
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: null, message: '' });

        try {
            // Usar la configuración y estructura del mensaje desde el archivo separado
            const templateParams = prepareEmailJSParams(formData);

            const response = await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                templateParams,
                EMAILJS_CONFIG.publicKey
            );

            if (response.status === 200) {
                setStatus({
                    type: 'success',
                    message: '¡Mensaje enviado con éxito! Te responderé pronto.'
                });
                
                // Limpiar el formulario
                setFormData({
                    nombre: "",
                    email: "",
                    asunto: "",
                    mensaje: ""
                });
            } else {
                throw new Error('Error al enviar el mensaje');
            }

        } catch (error) {
            console.error("Error al enviar el mensaje:", error);
            setStatus({
                type: 'error',
                message: 'Error al enviar el mensaje. Inténtalo de nuevo.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8 ${className}`}>
            <h2 className="text-2xl font-bold text-white mb-6">Envíame un mensaje</h2>
            
            {/* Status Message */}
            {status.type && (
                <div className={`mb-6 p-4 rounded-lg ${
                    status.type === 'success' 
                        ? 'bg-green-500/20 border border-green-500/30 text-green-200' 
                        : 'bg-red-500/20 border border-red-500/30 text-red-200'
                }`}>
                    {status.message}
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-purple-200 text-sm font-medium mb-2">
                            Nombre
                        </label>
                        <input 
                            type="text" 
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                            placeholder="Tu nombre"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-purple-200 text-sm font-medium mb-2">
                            Email
                        </label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                            placeholder="tu@email.com"
                            required
                        />
                    </div>
                </div>
                
                <div>
                    <label className="block text-purple-200 text-sm font-medium mb-2">
                        Asunto
                    </label>
                    <input 
                        type="text" 
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="¿En qué puedo ayudarte?"
                        required
                    />
                </div>
                
                <div>
                    <label className="block text-purple-200 text-sm font-medium mb-2">
                        Mensaje
                    </label>
                    <textarea 
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Cuéntame sobre tu proyecto..."
                        required
                    ></textarea>
                </div>
                
                <Button 
                    variant="primary" 
                    size="lg" 
                    fullWidth 
                    type="submit"
                    loading={loading}
                >
                    {loading ? "Enviando..." : "Enviar Mensaje"}
                </Button>
            </form>
        </div>
    );
}
