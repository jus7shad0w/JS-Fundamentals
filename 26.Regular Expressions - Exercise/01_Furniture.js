function furniture(input) {
    let paternIitem = /[A-Z][a-z]{1,}/mg
    let paternPrice = /[0-9]{1,}[.][0-9]{1,2}/mg
    let qty = 
}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])