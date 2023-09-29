export const Alerta = ({message, type}) => {
    return (
        <div className={`alert alert-${type}`}>{message}</div>
    );
}