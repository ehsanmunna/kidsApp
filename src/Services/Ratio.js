
const Ratio = (width, height, expectedWidth) =>{
    let expectedHeight = (height / width) * expectedWidth;
    return {width: expectedWidth, height: expectedHeight};
}

export {Ratio}