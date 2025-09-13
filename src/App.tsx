import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { AlertTriangle, Volume2, VolumeX, Ear, ShieldAlert, Home, Building2, Users, TrendingUp } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Principal */}
      <header className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-12 h-12 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-black">
              ¡ALTO AL RUIDO!
            </h1>
            <AlertTriangle className="w-12 h-12 text-yellow-300" />
          </div>
          <p className="text-xl md:text-2xl font-semibold mb-2">
            Campaña de Prevención Contra la Contaminación Acústica
          </p>
          <p className="text-lg opacity-90">
            Tu salud auditiva está en riesgo • Actúa ahora
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Sección: Qué es la contaminación acústica */}
        <section className="mb-12">
          <div className="bg-blue-900 text-white p-6 rounded-xl mb-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Volume2 className="w-8 h-8" />
              ¿Qué es la Contaminación Acústica?
            </h2>
            <p className="text-lg leading-relaxed">
              La contaminación acústica es la presencia de <strong>sonidos molestos, desagradables o excesivos</strong>
              que pueden causar daños temporales o permanentes al oído humano. Se considera peligroso cualquier sonido
              <strong className="text-yellow-300"> superior a 85 decibeles (dB)</strong> por períodos prolongados.
            </p>
          </div>

          {/* Espacio para foto del usuario */}
          <div className="bg-yellow-100 border-4 border-dashed border-yellow-500 p-8 rounded-xl text-center">
            <div className="mx-auto mb-4 flex items-center justify-center">
              <img
                src="/Photoroom_20250912_194316.jpeg"
                alt="Persona tapándose los oídos en zona de maquinaria"
                style={{ width: '530px', height: '300px', objectFit: 'cover', borderRadius: '12px' }}
                className="shadow"
              />
            </div>
          </div>
        </section>

        {/* Efectos del Ruido - Grid de dos columnas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Efectos del Ruido en tu Vida Diaria
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* En el Trabajo */}
            <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-r-xl">
              <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-3">
                <Building2 className="w-8 h-8" />
                En el Trabajo
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Hipoacusia ocupacional:</strong> Pérdida auditiva permanente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Tinnitus:</strong> Zumbido constante en los oídos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Estrés laboral:</strong> Aumento de cortisol y ansiedad</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Menor productividad:</strong> Dificultad de concentración</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-white rounded-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1586268321208-c1812b582cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub2lzZSUyMHBvbGx1dGlvbiUyMHdvcmtwbGFjZSUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzU3NzIxNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Persona usando protección auditiva en el trabajo"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* En el Hogar/Calle */}
            <div className="bg-orange-50 border-l-8 border-orange-500 p-6 rounded-r-xl">
              <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-3">
                <Home className="w-8 h-8" />
                En Casa y la Calle
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Trastornos del sueño:</strong> Insomnio y descanso deficiente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Problemas cardiovasculares:</strong> Hipertensión arterial</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Irritabilidad:</strong> Cambios de humor frecuentes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Dolor de cabeza:</strong> Migrañas y cefaleas tensionales</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-white rounded-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1669790560369-f6f15f5bb2b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbm9pc2UlMjB0cmFmZmljJTIwdXJiYW58ZW58MXx8fHwxNzU3NzIxNzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Tráfico urbano generando contaminación acústica"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Datos Alarmantes */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-red-700 to-red-600 text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
              <TrendingUp className="w-10 h-10" />
              Datos que Te Harán Reflexionar
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center bg-white/10 p-6 rounded-xl">
                <div className="text-4xl font-black text-yellow-300 mb-2">1.1 mil</div>
                <p className="text-lg">millones de personas sufren pérdida auditiva mundial</p>
              </div>
              <div className="text-center bg-white/10 p-6 rounded-xl">
                <div className="text-4xl font-black text-yellow-300 mb-2">16%</div>
                <p className="text-lg">de la pérdida auditiva en adultos es causada por ruido ocupacional</p>
              </div>
              <div className="text-center bg-white/10 p-6 rounded-xl">
                <div className="text-4xl font-black text-yellow-300 mb-2">85 dB</div>
                <p className="text-lg">límite seguro de exposición durante 8 horas laborales</p>
              </div>
            </div>

            {/* Espacio para foto del usuario */}
            <div className="bg-yellow-100 border-4 border-dashed border-yellow-500 p-8 mt-8 rounded-xl text-center">
              <div className="mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/Photoroom_20250912_194502.jpeg"
                  alt="Persona tapándose los oídos en zona de maquinaria"
                  style={{ width: '430px', height: '430px', objectFit: 'cover', borderRadius: '12px' }}
                  className="shadow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Niveles de Ruido */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Escala de Niveles de Ruido (Decibeles)
          </h2>

          <div className="bg-gray-100 p-6 rounded-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-100 rounded-lg border-l-4 border-green-500">
                <span className="font-semibold">30-40 dB</span>
                <span>Biblioteca, susurro</span>
                <span className="text-green-600 font-bold">SEGURO</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-yellow-100 rounded-lg border-l-4 border-yellow-500">
                <span className="font-semibold">60-70 dB</span>
                <span>Conversación normal, televisión</span>
                <span className="text-yellow-600 font-bold">MODERADO</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-orange-100 rounded-lg border-l-4 border-orange-500">
                <span className="font-semibold">85-90 dB</span>
                <span>Tráfico urbano, maquinaria</span>
                <span className="text-orange-600 font-bold">LÍMITE SEGURO</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-red-100 rounded-lg border-l-4 border-red-500">
                <span className="font-semibold">100+ dB</span>
                <span>Conciertos, sirenas, taladros</span>
                <span className="text-red-600 font-bold">PELIGROSO</span>
              </div>
            </div>
          </div>
        </section>

        {/* Medidas de Prevención */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-3">
            <VolumeX className="w-10 h-10 text-blue-600" />
            Medidas de Prevención
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-700 mb-4">En el Trabajo:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <Ear className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Usa protección auditiva</p>
                    <p className="text-sm text-gray-600">Tapones o audífonos certificados</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <ShieldAlert className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Solicita evaluaciones auditivas</p>
                    <p className="text-sm text-gray-600">Audiometrías anuales obligatorias</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <Volume2 className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Conoce los límites de exposición</p>
                    <p className="text-sm text-gray-600">Máximo 8 horas a 85 dB</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1747999703278-ef065c39cb18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXIlMjBwcm90ZWN0aW9uJTIwc2FmZXR5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc1NzcyMTc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Equipos de protección auditiva"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-green-700 mb-4">En Casa y la Calle:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <Home className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Aislamiento acústico</p>
                    <p className="text-sm text-gray-600">Ventanas dobles, cortinas gruesas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <VolumeX className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Controla el volumen</p>
                    <p className="text-sm text-gray-600">Regla 60/60: máximo 60% por 60 minutos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <Ear className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Descansos auditivos</p>
                    <p className="text-sm text-gray-600">Períodos de silencio durante el día</p>
                  </div>
                </div>
              </div>

              {/* Espacio para foto del usuario */}
              <div className="bg-yellow-100 border-4 border-dashed border-yellow-500 p-8 rounded-xl text-center">
                <div className="mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/OIP.webp"
                    alt="Persona tapándose los oídos en zona de maquinaria"
                    style={{ width: '300px', height: '150px', objectFit: 'cover', borderRadius: '12px' }}
                    className="shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">¡Tu Salud Auditiva es Invaluable!</h2>
          <p className="text-xl mb-6">
            La <strong>hipoacusia</strong> es irreversible, pero <strong>100% prevenible</strong>
          </p>

          <div className="bg-yellow-400 text-blue-900 p-6 rounded-xl mb-6">
            <p className="text-lg font-bold">
              🚨 RECUERDA: Si experimentas zumbidos, dolor de oído o dificultad para escuchar,
              consulta inmediatamente a un profesional de la salud auditiva.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="font-bold text-yellow-300">PREVÉ</p>
              <p className="text-sm">Usa protección auditiva</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="font-bold text-yellow-300">DETECTA</p>
              <p className="text-sm">Hazte chequeos regulares</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="font-bold text-yellow-300">ACTÚA</p>
              <p className="text-sm">Busca ayuda profesional</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            📱 Comparte esta información • Salva oídos • Salva vidas
          </p>
          <p className="text-xs mt-2 italic">
            "La contaminación acústica mata en silencio... no dejes que tu audición sea la víctima"
          </p>
          <p className="text-xs mt-4 italic">
            Santiago Chacón Cortés - 5600567
          </p>
        </footer>
      </div>
    </div>
  );
}