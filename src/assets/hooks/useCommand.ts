interface Command {
  execute(): void
  undo(): void
}
class History {
  private commands: Command[] = []
  private lastCommandIndex: number = -1
  //判断用户之前是否执行过撤销操作，是的话截断数组，将撤销的操作从数组移除
  executeCommand(command: Command) {
    if (
      this.commands.length > 0 &&
      this.lastCommandIndex < this.commands.length - 1
    ) {
      this.commands = this.commands.slice(0, this.lastCommandIndex + 1)
    }
    //执行本次操作，并将其添加到历史记录，指针加一
    command.execute()
    this.commands.push(command)
    this.lastCommandIndex += 1
  }
  undo() {
    //若操作记录commands为空，取消撤销;否则正常撤销
    if (this.lastCommandIndex <= 0) return
    const command = this.commands[this.lastCommandIndex]
    command.undo()
    this.lastCommandIndex--
  }
  redo() {
    //若先前未执行撤销操作，取消恢复;否则正常恢复
    if (this.lastCommandIndex === this.commands.length - 1) return
    const command = this.commands[this.lastCommandIndex + 1]
    command.execute()
    this.lastCommandIndex++
  }
}
export { History, type Command }
