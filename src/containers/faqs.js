import React from "react";
import FaqData from '../fixtures/faqs.json';
import { Accordion } from "../components";

export default function FaqContainer (){
    return (
       <Accordion>
           <Accordion.Title>Frequently Asked Questions</Accordion.Title>
           {FaqData.map((item)=>(
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))
            }

       </Accordion> 

    )
}
