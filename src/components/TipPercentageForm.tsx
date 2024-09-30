// import { Dispatch } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  type TipPercentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>,
    tip: number
  }

export default function TipPercentageForm({setTip, tip} : TipPercentageFormProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">Prpopina</h3>

        <form action="">
            {tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor="">{tipOption.label}</label>
                    <input type="radio" 
                        id={tipOption.id}
                        name="tip"
                        value={tipOption.value}
                        onChange={ e => setTip(+e.target.value)}
                        //para solucionar el error de target.value type 'string' poner un + al principio, o poner valueAsNumber pero solo funciona en el input text
                        checked={tipOption.value === tip}
                    />
                </div>
            ))}
            <div>

            </div>
        </form>
    </div>
  )
}
