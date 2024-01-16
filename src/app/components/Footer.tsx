import React from 'react'

function Footer({fullscreen}: any) {
  return (
      <div className={`bg-white`}>
          <div className={`${fullscreen && 'mx-auto max-w-7xl py-8'}`}>
              <div className='flex justify-between'>
                <div className='space-y-4'></div>
                  <div>test</div>
                  <div>test</div>
                  <div>test</div>
                  <div>test</div>
              </div>
          </div>
    </div>
  )
}

export default Footer