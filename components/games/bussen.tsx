import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/games/text.module.sass'
import { useSelector } from 'react-redux'
import { selectPlayerState } from '../../store/PlayerSlice'
import { selectSettingsState } from '../../store/SettingsSlice'
import { usePlayers } from '../usePlayers'

export function Bussen(props: GameProps) {
  const beginTime = useRef<number>(props.time)
  const players = useSelector(selectPlayerState)
  const settings = useSelector(selectSettingsState)

  const deLul = useRef(usePlayers(1))

  useEffect(() => {
    // After 60 seconds, the game is done
    if ((props.time - beginTime.current) > settings.timeOnScreen) {
      console.log('[Bussen] Done!')
      props.done()
    }
  }, [props])


  return <div className={styles.main}>
    <h1><span>{deLul.current}</span></h1>

    <h2>Hou je OV-chipkaart maar gereed want jij gaat de bus in!</h2>
  </div>
}