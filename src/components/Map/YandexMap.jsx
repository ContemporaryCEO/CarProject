import React from 'react'
import Container from '@mui/material/Container'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

export const YandexMap = () => {
  return (
        <Container maxWidth={false}>
            <YMaps>
                <Map
                    height="100%"
                    width="100%"
                    defaultState={{
                      center: [55.75, 37.57],
                      zoom: 9,
                      controls: ['zoomControl', 'fullscreenControl']
                    }}
                    modules={['control.ZoomControl', 'control.FullscreenControl']}
                >
                    <Placemark defaultGeometry={[55.75, 37.57]} />
                </Map>
            </YMaps>
        </Container>
  )
}
