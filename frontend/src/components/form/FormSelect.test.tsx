import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import  { shallow } from 'enzyme';
import {findByAttr} from '../helps/testHelps';
import FormSelect from './formSelect';
configure({ adapter: new Adapter() });

describe('Form Select Component', ()=> {

    describe('Have props ', ()=> {

        let test:any;
        beforeEach(()=>{
            const props = {
                    options:[],
                    onChange:()=>{},
                    option:''
                  
                   
                }
            
            test = shallow(<FormSelect {...props}/>);
            
        })
        it('Should render form', ()=>{
            
            const form = findByAttr(test,'button-form');
            expect(form.length).toBe(1)
        })


        
    
    })


})