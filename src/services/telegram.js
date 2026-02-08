const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

export function hasTelegramConfig() {
  return Boolean(botToken && chatId)
}

export async function sendTelegramBooking(payload) {
  if (!hasTelegramConfig()) {
    throw new Error('Telegram config is missing')
  }

  const message = [
    'Yangi buyurtma',
    `Ism: ${payload.fullName}`,
    `Telefon: ${payload.phone}`,
    `Tur: ${payload.tour}`,
    `Izoh: ${payload.note || '-'}`,
  ].join('\n')

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })

  if (!response.ok) {
    throw new Error('Telegram request failed')
  }

  const data = await response.json()
  if (!data?.ok) {
    throw new Error(data?.description || 'Telegram API error')
  }

  return data
}
