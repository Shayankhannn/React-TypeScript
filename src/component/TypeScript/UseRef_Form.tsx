import React, { useState } from 'react'

type FormData = {
    name: string;
    email: string;
    password: string;
}

const UseRef_Form = () => {



    const [Data,setData] = useState<FormData>({
        name: "",
        email: "",
        password:'',
    })



    return (
    <form>

    </form>
  )
}

export default UseRef_Form