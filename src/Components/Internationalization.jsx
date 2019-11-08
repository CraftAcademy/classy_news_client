import React from 'react'
import { useTranslation } from 'react-i18next'

const Internationalization = () => {
  const { t } = useTranslation()
  return (
    <>
      <h1>{t('weather.title')}</h1>
      <h1>{t('news.title')}</h1>
    </>
  )
}

export default Internationalization