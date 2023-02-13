import './styles/index.scss'
import classNames from '../shared/lib/classNames/classNames'
import useTheme from 'app/providers/themeProvider/lib/useTheme'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar/ui/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import React, { Suspense } from 'react'

const App = () => {
  const { theme } = useTheme()

  return (
        <div className={classNames('app', {}, [theme])}>
          <Suspense fallback='true'><Navbar/>
                <div className='content-page'>
                  <Sidebar/>
                  <AppRouter/>
              </div>
            </Suspense>
      </div>
  )
}

export default App
