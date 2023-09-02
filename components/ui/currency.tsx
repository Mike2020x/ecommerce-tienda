interface CurrencyProps {
    value: number
}

const formatter = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0
})
const Currency: React.FC<CurrencyProps> = ({
    value
}) => {
    return (
        <div className="font-semibold ">
            {formatter.format(Number(value))}
        </div>
    );
}

export default Currency;