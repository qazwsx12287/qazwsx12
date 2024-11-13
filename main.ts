let value = 0
serial.setBaudRate(BaudRate.BaudRate115200)
if (true) {
    Asr_V3.Asr_Clear_Buffer()
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Set_Mode(Asr_V3.Mode.password_mode)
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Add_Words(0, "xiao ya")
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Add_Words(1, "hong deng")
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Add_Words(2, "lv deng")
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Add_Words(3, "lan deng")
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Add_Words(4, "guang deng")
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Add_Words(5, "hao kai xin")
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Add_Words(6, "hao nan guo")
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Add_Words(7, "bi xin")
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Add_Words(8, "xiao ya zi")
    Asr_V3.Wait_Asr_Busy()
    serial.writeNumber(Asr_V3.Asr_NUM_Cleck())
    Asr_V3.Cleck_Asr_Num(9)
}
Asr_V3.Asr_Set_RGB2(Asr_V3.enColor.White)
Asr_V3.Asr_Buzzer(Asr_V3.Buzzer_State.ON)
basic.showIcon(IconNames.Yes)
basic.pause(1000)
Asr_V3.Asr_Set_RGB2(Asr_V3.enColor.OFF)
Asr_V3.Asr_Buzzer(Asr_V3.Buzzer_State.OFF)
basic.forever(function () {
    value = Asr_V3.Asr_Result()
    serial.writeNumber(value)
    if (value == 5) {
        basic.showIcon(IconNames.Happy)
    } else if (value == 6) {
        basic.showIcon(IconNames.Sad)
    } else if (value == 7) {
        basic.showIcon(IconNames.Heart)
    } else if (value == 8) {
        basic.showIcon(IconNames.Duck)
    }
    basic.pause(500)
})
