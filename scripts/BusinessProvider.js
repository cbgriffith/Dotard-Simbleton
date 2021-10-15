const business = [
    {
        name: "Care-media",
        address: "8147 Franklin Court Tunnel",
        addressZip: "Mouthcard, WI 56839"
    },
    {
        name: "Stanholding",
        address: "2889 Fawn Court Garden",
        addressZip: "Fellsmere, NM 09705"
    },
    {
        name: "Highnix",
        address: "5734 Maple Avenue Throughway",
        addressZip: "Little Genesee, ME 49376"
    },
    {
        name: "Conit",
        address: "5755 Hillside Drive Crossroad",
        addressZip: "Norval, IL 53326"
    },
    {
        name: "Dong-tom",
        address: "4826 Arch Street Lights",
        addressZip: "Newburyport, KS 67071"
    }
]

export const useBusiness = () => {
    return business.slice()
}