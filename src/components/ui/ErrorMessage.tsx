interface ErrorMessageProps{
    message: string;
}

const ErrorMessage = ({message}: ErrorMessageProps) => {
  return (
    <p className="text-gray-800 text-center font-semibold mt-8">
      <strong>{message}</strong>
    </p>
  )
}

export default ErrorMessage
