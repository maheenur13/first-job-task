import React from 'react';
import Brands from '../Brands/Brands';
import Category from '../Category/Category';
import Countries from '../Countries/Countries';
import DiscountAndPrice from '../DiscountAndPrice/DiscountAndPrice';
import DividerDashed from '../DividerDashed/DividerDashed';
import Fabric from '../Fabric/Fabric';
import Filters from '../Filters/Filters';
import Ratings from '../Ratings/Ratings';
import Sizes from '../Sizes/Sizes';
import Pattern from '../Pattern/Pattern';
import './SideBar.scss';
import Services from '../Services/Services';
import ClothingStyle from '../ClothingStyle/ClothingStyle';
import MensTrend from '../MensTrend/MensTrend';
const SideBar = () => {
    return (
        <div className="border rounded-3">
            <Filters></Filters>
            <DividerDashed/>
            <Category></Category>
            <DividerDashed/>
            <Brands></Brands>
            <DividerDashed/>
            <Countries/>
            <DividerDashed/>
            <Sizes/>
            <DividerDashed/>
            <DiscountAndPrice/>
            <DividerDashed/>
            <Ratings/>
            <DividerDashed/>
            <Fabric/>
            <DividerDashed/>
            <Pattern/>
            <DividerDashed/>
            <Services/>
            <DividerDashed/>
            <ClothingStyle/>
            <DividerDashed/>
            <MensTrend/>
            
            
        </div>
    );
};

export default SideBar;