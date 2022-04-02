import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import config from '../../config/default.json'
import './Content.css'
import { Card, CardContent } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'
import Box from '@mui/material/Box'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import WorkIcon from '@mui/icons-material/Work'
import Button from '@mui/material/Button'

const layout = config.switchEng ? config.layouts.EN_layout : null

export const ContentSection = () => {
  const contentBenefits = Object.entries(layout.Benefits)

  return (

        <Container>
            <Typography variant={'h2'} align={'center'} gutterBottom={true}>
                Welcome to the {layout['Company Name']} international website.
            </Typography>
            <hr className={'hr'}/>
            <Typography variant={'h3'} align={'center'} gutterBottom={true}>
                {layout.WelcomeMessage}
            </Typography>
            <hr className={'hr hr-small'}/>
            <div>
                <Container className={'card-holder'} sx={{
                  display: 'flex',
                  marginBottom: '5rem'
                }}>
                    {contentBenefits.map((benefit, id) => {
                      console.log(benefit)
                      return (
                          <div key={id} className={'cards'}>
                              <Card><CardContent className={'inner-card'}>
                                  <div className={'card-caption'}>
                                      <Typography variant={'h4'}>
                                          {benefit[1].Caption}
                                      </Typography>
                                  </div>
                                  <Box className={'card-icon'} sx={{ display: 'flex', justifyContent: 'center' }}>
                                      {benefit[1].jsxIcon === '<SettingsIcon />' ? <SettingsIcon fontSize={'large'}/> : null}
                                      {benefit[1].jsxIcon === '<HomeRepairServiceIcon />' ? <HomeRepairServiceIcon fontSize={'large'} /> : null}
                                      {benefit[1].jsxIcon === '<DirectionsCarIcon />' ? <DirectionsCarIcon fontSize={'large'} /> : null}
                                      {benefit[1].jsxIcon === '<WorkIcon />' ? <WorkIcon fontSize={'large'} /> : null}
                                  </Box>
                                  <div className={'card-text'}>
                                      {benefit[1].Text}
                                  </div>
                                  <Button size={'large'}>{benefit[1].SubmitButton}</Button>
                              </CardContent>
                              </Card>
                          </div>
                      )
                    })}
                </Container>
            </div>
        </Container>

  )
}
