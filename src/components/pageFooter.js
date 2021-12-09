import styles from './pageFooter.module.css';

export default function PageFooter (props){
    const { title } = props

    return (
        <div className={styles.header}>
            Pie de Pagina
        </div>
    )
}