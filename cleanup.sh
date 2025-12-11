#!/bin/bash


# Eliminar carpetas relacionadas con Genkit
rm -rf src/ai
rm -rf .genkit

# Eliminar archivos de configuración de Genkit si existen
rm -f genkit.config.js

echo "✅ Limpieza completada"
echo ""
echo "📦 Próximos pasos:"
echo "1. Elimina node_modules y package-lock.json:"
echo "   rm -rf node_modules package-lock.json"
echo ""
echo "2. Instala las dependencias:"
echo "   npm install"
echo ""
echo "3. Prueba localmente:"
echo "   npm run dev"
echo ""
echo "4. Haz el build:"
echo "   npm run build"
echo ""
echo "5. Despliega en Netlify"