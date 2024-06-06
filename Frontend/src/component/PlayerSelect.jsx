import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Select from 'react-select';

function PlayerSelect() {
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);
    const [data, setData] = useState([]);
    const BaseURL = import.meta.env.VITE_API_BASE_URL;

    const getPlayers = async () => {
        axios.get(`${BaseURL}/players`).then((response) => {
            setData(response.data)
        })
    }

    useEffect(() => {
        getPlayers()
    }, []);

    console.log(data)

    return (
        <>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={data[0]}
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                name="color"
                options={data}
            />
        </>
    )
}

export default PlayerSelect