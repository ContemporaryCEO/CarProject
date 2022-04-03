import React from 'react'
import Container from '@mui/material/Container'
import { localizedLayout } from './footerConfiguration'
import Typography from '@mui/material/Typography'
import { Twitter, Facebook, YouTube, Instagram, Google } from '@mui/icons-material'
import Button from '@mui/material/Button'
import { IconButton } from '@mui/material'

export const Footer = () => {
  const data = localizedLayout
  const calculateSocials = (socials) => {
    switch (socials) {
      case 'Twitter':
        return <Twitter fontSize={'large'}/>
      case 'Facebook':
        return <Facebook fontSize={'large'}/>
      case 'YouTube':
        return <YouTube fontSize={'large'}/>
      case 'Instagram':
        return <Instagram fontSize={'large'}/>
      case 'Google':
        return <Google fontSize={'large'}/>
      default:
        return undefined
    }
  }
  return (<Container maxWidth={false} sx={{ bgcolor: '#333', padding: '2rem' }}>
            <Container className={'additions-container'}
                       sx={{
                         display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', flexBasis: '25%'
                       }}>
                {data.information.map((element, id) => {
                  return (<div key={id} className={'additions-folder'}>
                            <Typography align={'center'} style={{ textTransform: 'capitalize' }} variant={'h5'} sx={{
                              color: 'text.secondary'
                            }} className={'additions-header'}>{element.title}</Typography>
                            <ul className={'additions-content'}>
                                {element.sections.map((innerElement, id) => {
                                  return (<li key={id} className={'additions-link'}>
                                            <Button>
                                                <Typography variant={'h6'} sx={{
                                                  color: 'text.secondary'
                                                }} className={'additions-link-text'}>{innerElement}</Typography>
                                            </Button>
                                        </li>)
                                })}
                            </ul>
                        </div>)
                })}
                <div className={'social-holder'}
                     style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    {data.social.map((element, id) => {
                      return (<div key={id} className={'social-item'}>
                                <IconButton >{calculateSocials(element)}</IconButton>
                            </div>)
                    })}
                </div>
            </Container>
        </Container>)
}
