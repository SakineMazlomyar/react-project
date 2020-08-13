import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import DetailView from './DetailView';
import Enzyme, { shallow } from 'enzyme';
import {findByAttr} from '../../../Utils/index';


configure({ adapter: new Adapter() });

const setUp = (props={
    logo_url:'',
    description:'',
    headline:'',
    city:'',
    country:''
}) =>{
    const component = shallow(<DetailView {...props}/>);
    return component
}

describe('DetailView Component', ()=>{

    let wrapper:any;
    beforeEach(()=>{
        const props = {
            logo_url:'This is a logo  url test',
            description:'This is a description test',
            headline:'This is a headline test',
            city:'This is a city test',
            country:'This is a country test'
        }
        wrapper = setUp(props)
    })

    it('Should render img', ()=>{
        const img = findByAttr(wrapper,'detail-view-img');
        expect(img.length).toBe(1)
    })
    it('Should render title', ()=>{
        const title = findByAttr(wrapper,'detail-view-title');
        expect(title.length).toBe(1)
    })
    it('Should render description', ()=>{
        const description = findByAttr(wrapper,'detail-view-description');
        expect(description.length).toBe(1)
    })
    it('Should render city', ()=>{
        const city = findByAttr(wrapper,'detail-view-city');
        expect(city.length).toBe(1)
    })
    it('Should render country', ()=>{
        const country = findByAttr(wrapper,'detail-view-country');
        expect(country.length).toBe(1)
    })


})