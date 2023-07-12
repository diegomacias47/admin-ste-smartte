export const CustomInput = ({icon, label, onChange, name}) => {
    const Icon = icon;
    return (
        <div>
            <label className="poppins-bold text-sm inline-block mb-2 text-black">{label}</label>
            <div className="flex">
                <input name={name} className="custom-input text-sky-600" type="text" onChange={(event) => onChange(event)}/>
                <div className="flex items-center border-2 border-s-0 rounded-e" >
                    <Icon className="stroke-2 h-[23px] text-sky-400 px-3"/>
                </div>
            </div>
        </div>
    );
}