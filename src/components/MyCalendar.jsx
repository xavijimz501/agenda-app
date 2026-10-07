import React from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import esES from 'date-fns/locale/es' // Opcional: soporte en español

// Estilos obligatorios de React Big Calendar
import 'react-big-calendar/lib/css/react-big-calendar.css'

const locales = {
    'es': esES,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

// Eventos de ejemplo
const myEventsList = [
    {
        title: 'Reunión de equipo',
        start: new Date(2026, 9, 7, 10, 0), // Meses en JS van de 0-11 (9 = Octubre)
        end: new Date(2026, 9, 7, 11, 30),
    },
]

export default function MyCalendar() {
    return (
        <div style={{ height: '500px', margin: '20px' }}>
            <h2>Mi Agenda</h2>
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                culture="es" // Idioma español
            />
        </div>
    )
}