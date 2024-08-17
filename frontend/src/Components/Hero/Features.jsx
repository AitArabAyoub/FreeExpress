function Features() {
    return (
        <div className="row mt-3 bg-white">
            <Feature hasBorder={true} icon = {<i className="bi bi-lightning-charge-fill fs-2"></i>} text1="Fast Delivery" text2="Start from $10"/>
            <Feature hasBorder={true} icon = {<i className="bi bi-bank fs-2"></i>} text1="Money Guarante" text2="7 Days Back"/>
            <Feature hasBorder={true} icon = {<i className="bi bi-alarm fs-2"></i>} text1="365 Days" text2="For Free Return"/>
            <Feature hasBorder={true} icon = {<i className="bi bi-credit-card fs-2"></i>} text1="Payment" text2="Secure System"/>
        </div>
    )
}

export default Features
// eslint-disable-next-line react/prop-types
const Feature = ({hasBorder,icon,text1,text2})=>{
    return (
        <div className={hasBorder ? "border border-1 col-3 d-flex align-items-center justify-content-center gap-3 py-3 " : "col-3 d-flex align-items-center justify-content-center gap-3 py-3 "}>
            <div>
                {icon}
            </div>
            <div>
                <h5 className="m-0">{text1}</h5>
                <p className="m-0 text-secondary">{text2}</p>
            </div>
        </div>
    )
}