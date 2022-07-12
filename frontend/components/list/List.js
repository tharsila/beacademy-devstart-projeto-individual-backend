import styles from './List.module.scss'
import Image from 'next/image'
import { Button } from '@mui/material'
import { TextService } from '../../data/services/TextService'

export default function List({pets, onSelect}) {

  const maxLengthText = 225;
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.card_container}>
          {pets.map((pet) => (
            <li key={pet.id} className={styles.card_content}>
              <Image className={styles.card_image} src={pet.image} width="350px" height="250px" />
              <div className={styles.second_part}>
                <div className={styles.btn}>
                  <div className={styles.btn_text}>
                    <span>{pet.name}</span>
                    <span>({pet.location})</span>
                  </div>
                </div>
                <div className={styles.info_container}>
                  <div className={styles.content_one}>
                    <div className={styles.info_content}>
                      <span>Idade</span>
                      <strong>{pet.age} anos</strong>
                    </div>
                    <div className={styles.info_content}>
                      <span>Sexo</span>
                      <strong>{pet.sex}</strong>
                    </div>
                    <div className={styles.info_content}>
                      <span>Peso</span>
                      <strong>{pet.weight}kg</strong>
                    </div>
                    <div className={styles.info_content}>
                      <span>Raça</span>
                      <strong>{pet.race}</strong>
                    </div>
                  </div>

                  <div className={styles.content_two}>
                    <div className={styles.info_content}>
                      <span>No abrigo desde:</span>
                      <strong>{pet.since}</strong>
                    </div>
                    <div className={styles.info_content}>
                      <span>Porte</span>
                      <strong>{pet.size}</strong>
                    </div>
                  </div>
                </div>
                <div className={styles.description}>
                  <h4>Sobre</h4>
                  <p>{TextService.limitText(pet.about, maxLengthText) }</p>
                </div>
              </div>

              <div className={styles.btn_confirmed}>
                <Button 
                  variant={'contained'} 
                  style={{textTransform: 'none', backgroundColor: '#713FFF'}}
                  onClick={() => onSelect(pet)}
                  >
                  Ajude agora!
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}