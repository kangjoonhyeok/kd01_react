
export default function MyDiv3(props) {
  return (
    <div className="flex flex-col p-5 m-10
                    w-3/4 h-3/4 bg-lime-500 text-white">
                        {`${props.dn1} > ${props.dn2} > ${props.dn3}`}
                    </div>
  )
}
