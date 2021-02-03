import { Player } from '../../../domain/models/userModel'

import { ApiPlayer } from '../../../domain/usecases/player'

export class Home {
  constructor() {
    this.show = false
    this.apiPlayer = new ApiPlayer()
    this.player = new Player() | undefined
    this.id = ''
  }

  async getInfoPlayer() {
    if (this.id) {
      this.player = new Player() | undefined
      this.show = !this.show
      setTimeout(async () => {
        this.player = await this.apiPlayer.getById(this.id)

        if (this.player.error) {
          alert(this.player.error)
          this.player = new Player() | undefined
        }

        this.id = ''
        this.show = !this.show
      }, 1250)
    } else {
      alert('informe um id')
    }
  }
}
