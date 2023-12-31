import { Box, Typography } from '@mui/material'
import React from 'react'

const Banner = (props) => {

    const boxStyle = {
        height: '100vh', // Set the height to 100% of the viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        backgroundColor: 'white',
        textAlign: 'center',
        backgroundSize: 'cover', // Ensure the background image covers the entire box
        backgroundPosition: 'right',
        borderBottom: '1px solid rgb(243 243 243 / 3%)'
    };


  return (
    <>
    <Box
    style={boxStyle}
    >

        <Box
        >
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <hr style={{width: '5%', height: '2px', border: '1px solid black'}} />
                <p
                className='text-lg px-3'
                >
                    {props.paragraph}
                </p>
                <hr style={{width: '5%', height: '2px', border: '1px solid black'}} />
            </Box>
            <Typography
            sx={{
                fontSize:{
                    xs: '50px',
                    sm: '50px',
                    md: '65px',
                    lg: '75px'
                  },                
                fontWeight: 'bold',
                margin: ' 0px 10px'
            }}
            >
                {props.title} <br/> 
                <span
                style={{
                    WebkitTextFillColor: 'transparent',
                    WebkitTextStrokeWidth: '2px',
                    WebkitTextStrokeColor: 'black',
                }}
                >
                    {props.titleTwo}
                </span>
            </Typography>

            <div 
            className='mouse_scroll'
            style={{
                paddingTop: '40px',
                margin: 'auto'
            }}
            >
                <div
                className='mouse'
                style={{
                    height: '42px',
                    width: '24px',
                    borderRadius: '14px',
                    transform: 'none',
                    border: '2px solid black',
                    margin: 'auto'
                }}
                >
                <div
                    className='wheel'
                    style={{
                    border: '2px solid black',
                    color: 'black',
                    display: 'block',
                    margin: '5px auto',
                    backgroundColor: 'black',
                    position: 'relative',
                    height: '4px',
                    width: '4px',
                    borderRadius: '8px',
                    animation: 'continuousBounce .6s linear infinite',
                    }}
                ></div>
                </div>

                <span
                style={{
                marginTop: '-1px',
                display: 'block',
                transform: 'rotate(45deg)',
                borderRight: '2px solid black',
                borderBottom: '2px solid black',
                margin: '0 auto 3px auto',
                width: '16px',
                height: '16px',
                animation: 'fadeeAnimation 2s infinite', // Adjust the duration

                }}
                >
                </span>
                <span
                style={{
                marginTop: '-1px',
                display: 'block',
                transform: 'rotate(45deg)',
                borderRight: '2px solid black',
                borderBottom: '2px solid black',
                margin: '-7px auto 3px auto',
                width: '16px',
                height: '16px',
                animation: 'fadeeAnimation 2s infinite', // Adjust the duration
                animationDelay: '.2s'
                }}
                >
                </span>
                <span
                style={{
                marginTop: '-1px',
                display: 'block',
                transform: 'rotate(45deg)',
                borderRight: '2px solid black',
                borderBottom: '2px solid black',
                margin: '-7px auto 3px auto',
                width: '16px',
                height: '16px',
                animation: 'fadeeAnimation 2s infinite', // Adjust the duration
                animationDelay: '.3s'
                }}
                >
                </span>
            </div>
        </Box>

    </Box>
    </>

  )
}

export default Banner