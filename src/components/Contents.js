import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import {Bar, Doughnut, Line} from "react-chartjs-2"
import axios from "axios";

const Section = styled.section`
    padding: 1rem;
`;

function Contents() {
    // const [confirmedData, setConfirmedData] = useState({})
    useEffect(() => {// 19:50 async
        const fetchEvents = async () => {
            const res = await axios.get("https://api.covid19api.com/total/dayone/country/kr")
            // makeData
        }

        fetchEvents();
    }, []);

    return(
        <Section>
            <h2>국내 코로나 현황</h2>
            {/* <div>
                <Bar data={confirmedData} options={ 
                    { title:{ display: true, text: "누적 확진자", fonstSize:16} },
                    { legend: {display: true, position: "bottom"} }} />
            </div> */}
        </Section>
    );
}

export default Contents