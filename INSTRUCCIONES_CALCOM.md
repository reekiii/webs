# 📅 Instrucciones para Configurar Cal.com

## 🎯 Qué es Cal.com

Cal.com es una plataforma de reservas **open-source y gratuita** que te permite:

- Crear calendarios de reservas personalizados
- Enviar confirmaciones y recordatorios automáticos
- Gestionar disponibilidad por horarios
- Integrarse fácilmente en cualquier web

**Ventajas vs TheFork/ElTenedor:**

- ✅ **0% comisiones** (TheFork cobra 1,50-4€ por comensal)
- ✅ **Datos propios** (no dependes de terceros)
- ✅ **Personalizable** (tu marca, tus colores)
- ✅ **Sin límites** de reservas

---

## 🚀 Configuración Paso a Paso

### 1. Crear Cuenta en Cal.com

1. Ve a [cal.com](https://cal.com)
2. Haz clic en "Sign Up" (Registrarse)
3. Elige un **username** (ejemplo: `restaurante-ejemplo`)
   - Este será tu URL: `cal.com/restaurante-ejemplo`
4. Completa el registro con email y contraseña

### 2. Crear un "Event Type" (Tipo de Reserva)

1. Una vez dentro, ve a "Event Types"
2. Haz clic en "+ New Event Type"
3. Configura:
   - **Nombre**: "Reserva de Mesa" o "Reserva - 2 Personas"
   - **URL**: `reserva-mesa` (quedará como `cal.com/tu-usuario/reserva-mesa`)
   - **Duración**: 2 horas (tiempo promedio de comida)
   - **Ubicación**: Dirección del restaurante o "Presencial"

### 3. Configurar Disponibilidad

1. En el Event Type, ve a "Availability"
2. Configura los horarios de tu restaurante:
   - **Ejemplo**: Lunes a Viernes 13:00-16:00 y 20:00-23:00
   - Sábados y Domingos: 13:00-23:00
3. Puedes crear diferentes horarios para cada día

### 4. Configurar Capacidad (Importante para Restaurantes)

1. En "Advanced Settings" del Event Type
2. Activa "Limit future bookings"
3. Configura:
   - **Seats per time slot**: Número de mesas disponibles por franja horaria
   - Ejemplo: Si tienes 10 mesas, pon 10
4. Activa "Recurring event" si quieres permitir reservas recurrentes

### 5. Personalizar Confirmaciones y Recordatorios

1. Ve a "Workflows" en el menú lateral
2. Crea un workflow para:
   - **Confirmación inmediata** (cuando reservan)
   - **Recordatorio 24h antes**
   - **Recordatorio 2h antes** (opcional)
3. Personaliza los mensajes con el nombre del restaurante

### 6. Obtener el Código de Integración

1. Ve a tu Event Type
2. Haz clic en "Embed"
3. Copia el código que te dan
4. **Importante**: Anota tu username y el nombre del event

---

## 🔧 Integrar en tu Web React

### Opción 1: Usar el Componente que te Creé

1. Abre `ReservationModal.jsx`
2. Cambia esta línea:

   ```javascript
   calUsername = "tu-restaurante"; // ← Pon tu username real
   ```

   Por ejemplo:

   ```javascript
   calUsername = "restaurante-ejemplo";
   ```

3. Importa el componente en `App.jsx`:

   ```javascript
   import ReservationDemo from "./components/sections/ReservationDemo";

   // Dentro del return, añade:
   <ReservationDemo />;
   ```

### Opción 2: Botón Simple en el Header

Añade esto en `Header.jsx`:

```javascript
import { useState } from 'react';
import ReservationModal from '../ui/ReservationModal';

// Dentro del componente:
const [showReservation, setShowReservation] = useState(false);

// En el JSX, añade un botón:
<button
  onClick={() => setShowReservation(true)}
  className="px-6 py-3 bg-gradient-to-r from-orange-600 to-rose-600 text-white rounded-xl font-semibold"
>
  Reservar Mesa
</button>

<ReservationModal
  isOpen={showReservation}
  onClose={() => setShowReservation(false)}
  calUsername="tu-username-aqui"
/>
```

---

## 💰 Modelo de Negocio para tus Clientes

### Plan Básico (300€)

- **NO incluye** sistema de reservas
- Solo WhatsApp + Formulario de contacto

### Plan Pro (600€)

- **Incluye** configuración de Cal.com
- Calendario básico integrado
- Confirmaciones automáticas

### Plan Enterprise (900€+)

- **Incluye** Cal.com personalizado
- Múltiples tipos de reserva (2 personas, 4 personas, eventos)
- Recordatorios SMS (si contratan Twilio)
- Integración con su CRM

---

## 🎨 Personalización Avanzada (Opcional)

### Cambiar Colores de Cal.com

En el embed, puedes añadir configuración de tema:

```javascript
data-cal-config='{"theme":"light","primaryColor":"#ea580c"}'
```

### Añadir Campos Personalizados

En Cal.com, ve a "Custom Fields" y añade:

- "Número de personas" (dropdown: 1, 2, 3, 4, 5+)
- "Ocasión especial" (text)
- "Alergias o restricciones" (textarea)

---

## 🆚 Alternativas si Cal.com no Funciona

1. **Calendly** (Freemium)
   - Más fácil de usar
   - Plan gratuito limitado a 1 tipo de evento
   - URL: calendly.com

2. **Tableo** (Específico para Restaurantes)
   - Gratis hasta 100 comensales/mes
   - Gestión de mesas con plano de sala
   - URL: tableo.com

3. **GloriaFood** (Gratis Ilimitado)
   - Widget de reservas + pedidos
   - Sin comisiones
   - URL: gloriafood.com

---

## ❓ Preguntas Frecuentes

**P: ¿Cal.com es realmente gratis?**
R: Sí, el plan gratuito incluye reservas ilimitadas. Solo pagas si quieres funciones premium (equipos, integraciones avanzadas).

**P: ¿Puedo usar mi propio dominio?**
R: Sí, en el plan de pago puedes usar `reservas.turestaurante.com` en lugar de `cal.com/tu-usuario`.

**P: ¿Cómo evito "no-shows"?**
R: Activa los recordatorios automáticos 24h y 2h antes. También puedes pedir confirmación por WhatsApp.

**P: ¿Puedo limitar el número de mesas?**
R: Sí, en "Advanced Settings" configura "Seats per time slot".

---

## 📞 Soporte

Si tienes problemas:

1. Documentación oficial: [cal.com/docs](https://cal.com/docs)
2. Comunidad: [cal.com/slack](https://cal.com/slack)
3. O contáctame y te ayudo con la configuración

---

**¡Listo!** Con esto ya puedes ofrecer un sistema de reservas profesional sin pagar comisiones. 🎉
