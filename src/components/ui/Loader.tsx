interface LoaderProps{
  message: string;
}

const Loader = ({message}: LoaderProps) => {
  return (
    <p> {message}   
    </p>
  )
}

export default Loader
