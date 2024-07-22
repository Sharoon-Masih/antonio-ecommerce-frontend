import React from 'react'

interface ContainerProps {
    children: React.ReactNode
}
// basic yeh jo container component bnaya hai yeh ek tarah sa wrapper hai which means kay ab hum jo be page create kreinga usko iss component ma wrap krdeinga taka yeh yeh jo margin-auto and max-width hna yeh bar bar set na krni  pare.
const Container: React.FC<ContainerProps> = ({ children }) => {
return (
    <div className='mx-auto max-w-7xl'>
        {children}
    </div>
)
}

export default Container