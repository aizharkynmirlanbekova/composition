import Comment from './components/Comment'
import './App.css';

function App() {
  const user = {
    author: {
      avatarUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExMVFRUXFhUWFRUXFRYWFxUVFRUYFxUVFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHR0rLS0rLS0rLS0tKy0rLS0tLS0tLS0tLS0tLS0tLS0rLS0tLystLS0tLSstLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xAA/EAABAwIEAwUGAwYGAgMAAAABAAIRAyEEBRIxQVFhBnGBkaETIjKxwfAUUtEHI0JicuEWM4KSovEVwiRD0v/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAQEAAgICAQMFAAAAAAAAAAABAhEDIRIxQQQTUSJhcYGR/9oADAMBAAIRAxEAPwCjKanlNKhZpSFKUiYIuSrkERclhcgOhKk1LtYQDwnhQtcTsCVM2jUPCO9AOSspl1gpG4F9ifRXmV5I57S4GIHiSnMQp6mXPDZhQ/h3cloMB77/AGfLc8oR2YmlSphpjUYcT0kmOllXjAx8AbpvxWFk7H0S54ptiXARfYEwCVb9lcoj/NAJb74E8BG/mFMxClqUntdpI97lClbRdF7K7xuYU3YsU2ETDr7wCI8YkK0xmX0hbcgTfrJAT8S2x7qcLhRPJXNZ1MEe6NtuqjfiJ3t92U9K0rW4N54KOpSLdwrrLnOe4hrS48IEwOaPxPZyq4TojmJE7cpRomSBCVGZhkD2zDiDvBEEW4g3Va2nVbu2eoSPSQprl2vnZJUMd6CNKaU5NKA5IuSIBVyRckBRSFKUhTM0hIUpSFMOXQkXQgFhRV6sc/JPfTJ2K1vZHIKYAqvGt3CeCAzOW5Jia92sIHM2C1uV9hIvWf8A6R+q1tKRyaOQTiSecc1UxLauGXUqQinSH1TX4OnUaQ5oFuVwrEUCd/BE0aQ4i/qqkLbGUMgfTeATqZI37+SF7Y5w7Ds00zYi55G0rW5vXhrncgfNu3y9Vm6GTivUc+p7zA23K5AMnpc+IVDYLs/hXUqdSu8zUeHANMxIcQD5D1VRm1d1QPaTD5jwJkEeBatD2pxOmpAsA1rzyBGlxEeHmVWZTlvt3awDpa0aSd/fdIffgNXk08kv2gQ5VlZYz2jwS5xABPGWOcP/AFRVfGmm1tQGIdDx/IdLTPcL+HVWubYvSwCIAb5OEc+UBZDPKznNcWCQbO6auP8AyHkpyuvRyF7PYP8Afhz+BqU3c2wZBnkRPkvQMdlnvBxJ2IBHKfd9D6LMZbRbUaHgafaNYfHQNQ7xBAPVbJleWienqBI8pRjRlFDUyggPMy4gCY/pNvLyUtDLqLGmpVGqJgHY8IjwVnVuIHX62UNSrIFu4cdREjuIA9UrIJVfUzYwadNoYGgF0e7GqwBPAi8+XBEYPEvI1BzWXIaTcu4i7vE9xHRS4XBNeA13uts58d8taD+n1ClxQDrkhjBMAWm/yn5KpSqbE0RUYRVh+8FpJcBzaYBCwWcYathzMa6Z+F7fk4cHLf4Sj7pgmDt/CRG0Dl3z9FUZlUqUnFjvfpvBIm872+t+TuSyzn4XixTMW0jh1lBVTTDpnc733Ksc1yloJdT2P8BgaT0PELKZg1wdpgieCW9npoalOOSiKbh50gHgAnFOJpJSSuXIJyVNXIA6EkJ6QhI0TgmlSEJhTBEoSJWoCzyrC63BegZbTaxoAXneDxLm/Cr/AAmZaR7xkq5YVbLWOClZe03WTp42q8iCAOhWmy+mdIc7gql2Q5rALFc1h+Xmpm0w7qEscE0s32qq+ypuqETA2HHi70E+B5qh7LZuH0NLrOqF5cBwkEBo7tDvCFr82LS0NdFzpvx1WK89z3DOw+MwnswQ19Qam8Dv9J8kHOw/bAn8Q0N9/UHjTNyHMnT6brSYnFMwtANAPuta3rAFj3+96rN08M78cHEhwpieO5ifX6pO1lQ1qlOgH6S/3ed2cZ6y0+W6StF7S5qKmH9qyXN2MDhMx1kEJnZZhZS0uvdwLjeYJjzsVaMysMwrWxYgDT+UzIHr8kBQxDWlrOMNnwEfOVOXtU9L7LcI3QC22kN9C0fIA+KPEgX2sB47ffVQUAWtMbagP9znD6I64Ane8De2xJ8IjvRoqiFUw6RED0vB8oSsaCJdcyd+4+sH5qXFRDQd93cgBBj0+aHw7w4Anq4dBOkR3yUqCYokS0dC7hv9n0VXjM1brFJjRJlxkwGsFtRPC0KxxLpAixJv47fRUePoaD7ovp96NyOAPW0lTdw4k/xA1lwHBs/FeXHkGbgCRbhxV7gMbTxLNwREy0yW/wAw4jb0WJdSc94aZuQXcLNEgd0uPjCBGOOGq66ZdJMgt2ba+lpi0WPPipxy77VZ0vO02WOpS+ndhvbhq+mxB8CskWF0uPxdeS2bc+DmCoAIP+bTHAm/tKc89y02Pfc0uY4cOlwDS0gxpBAd4zY9CB4oyk+BPSqoVQ4AjiFIUPRZpLW7QNkSU4imJEpTUEVckXJhZlNKckKSjCoyFIUwpkalC6E4BAS03QiKb0IERRBsBuUBpuz+AbVcJJ5wt4+mWNlomBt+ip+ymWCnTBdGo3PMK9q1mgTbv3/6Wkmk1XVMfpIOmAd+EdYO4U1fFe6SPuFHimNeOd+fFQYpnuGNwIhMdMs3EvxONYwfA0tdzE0zfzEQnds6kY3AiLe0I6glrgD8l3YLBk16tR2wkA7H72t0S9rsM5+Lovab05fHMRoMciJJ8kz+VFSxIbia5BBEua7kW2AcOodq/wBw6p3ZbDGtWNcwQyWsHIggknwBj+6gZl2sVKn/ANjatU8pp1i7U3rw9OSuexdP2VKL3MmeDiZ8r2Sp/A/tFU0sMWm46H7+SxXZDA/iMQXHZrtXcNVh6z4LTdpMQHMI2N/Mfc+Cb2MwzaNDUfjqEk82jgPvqo3unJ00WPxFOkL7AmTPEnYdTPqVTOxtR1QmIgBtwRA3AvsePSCOaKxlQEapgN5NcTMfFtwvx4zZAUsQWxL6bhwLTcGfidIMHa44hUUiydT1Ni5cfIJ9CiGwHc5ibnv8eHRDfiHbNYXdQd/qfNOp13DcEHqb+gt4KKYvEtPMSbHpzuhHtDjpYJP8TjwEbT5fLmU5+JPIAeBPjy7kThQeUDhsO7vU7PxZzH4JzXGGkk8wQOknc+izmaZdVdJIc48SAA1vdGwHcfFb/HUxMm/cf1Cz+IpyZaQIvEfZS0cYnCufTcNw3YbiY2iUZi8e74QBpN46qzzHBe0gv4bQIQVfL2wACUtdi0zC4Vzm+0PHZI5NOMfTGh127A8lzXgqk0hTU4ppQly5cuQFmU0pxTSmo0phTimlBOShNTggHtW27H5K0/vXiTwB4LHYJkvE7LWVc+NIBrL22HDxVYhutP8A0SQsj21zx2GpueGtEWkOvfa/BXeS42q9gL2ws9269nVfRoVbh01NI3do2B6Eqsr1Twm8pHmJ7V5i46mOLRwtw6LQ9nv2g1WkMxrfd29qBA/1Dh3o7td+FwLKTag9q+pqL2U3BuiGy2SRxJAPISqDsxmFPE1XUhQaxumQNRdxjcgc+Sy1Zh51tcscsvGT+3ruCpMaDVZEOaDIi9rSRuq3Fu11NQF9Lh57A+XoqHsXmRw2KOXPP7t4LsOfyOA1Opd0AkcoI4hazDYMMqVAeMHnHux8yfNaceczxmUY8mFwysrKMo6X1qYB0kl0ngCSAB3SPMIHD5ppBa6zgSJ84PUK+zJwa9w4yfUA36LE5nUGuQeQ9bFTyXR4xavr6yfuVQZ92pNEFjLuuG7wOZVnTaWsLui84a01q5Ezc+QKwx9231G2OO+j6uKxFY+897rzEmB4Cy6lQqA+654I5EhaLM8ydhWUm4cCn+7Daji1j3Oqg6nPBLfdvYC8AblUWHzCrUrsLnFxJAM8uNttl0zVw3KPPV1rpY4TtPjMPGp+tp/NNvELU5Vn7a4kOLX8Rq3nvmUDnOWNNBzwwN0tExMEg3PS3D5bKm7JZYarxpG1z15ffeufj5JyS6+FcnHJq+tvTMtkbn/UYICuaOIA/iB6yB5ALNDBPaI8r/TYeKrMVnVWkDLS6OJ+k/RXqsLWqzKvy9SstiMWWOgXHHfdBO7UVHWiegIaB37ldXxzXCSQTxg28bpWDa0p19Y+/VD1qIAkGeY/RAUscDZot4I+hV4H78EgGq0w8QR4qqdSLXRKta7SCgKjZdKoq4phCkcE1Uk1clXICxSFNldKRkKYU4lMlMOSykSoCajVLQTyV72NwgrVDUfeOB4qhw8uIpjjutRk00Hd8dfRXA9BobRELzn9olR1HH4evsGtAJ5B2oao6O0+avsR2iFJzdUwd7C3WFL2gwtLMKOlr2h4BLSYdYi4cBwKdkvVLG6u3mnavAuxFMOZd7Ttz5gHy8kZ+zzIX0ga9QEF2w4gCd+u/oga7MTgyWVKTi0bTy6P2cO+ClxfbDEVGexw2HcHbTOojua3vXnZzn8ftSdX5d2M47+q11bMBUzam6mZDKtODzOprIvzly9oqsmof6R/7ffivH+x3ZutQxFJ+JZpLiX6Td0t+EkDa+3G02het0HmSQdU7Aev31Xdw4TDCYz4cvPl5ZWs12owjhU1Djbr1IHd8ljamEl0O4kX6bffcvRc/ZqcAbctuHArG44ibR3+spZ62WN6QZ+NGHJ46eC8uymuKdRrztMO6A7FenZwA+g5r3QLx5WushlPZo1g4AxLQQQJngfmo1jMbL8tcKuq+XsxFPhBuCPmDwKEyHssWVNZOrg20RzO+/DzXUezuZ4b/JaXt3tDge5rrjjaDtxVhQwOcVvdDfYg7mAw+ZMhcn2fqJLjhlNVrMuL3kZ2tzJrGfhKd6tQAPIv7Jkg3/mPLlHNajsbknsKOpzQHOi1hpEWBk+fel7N9gaeHcKlU+0f8Rk21fmndxV3mOMoM95xBIBgtFug2sV18H084sPH/WPNzed69HGgIh1j0BcPACFm88wIIIv8p85TKWJq1SalR0A7AWEcAgcwxTvhiB3yT3rTKspGYxWH0kwCqrEOcJvHotiaWpk6fElVFekydvGynYUuBxb55jqtXhMZI/hnv+gVRUwEj3W+QH6oWnW9mYOqPvkUew1NSsCIMIB+67D4hrhZLWMAlKCkSQkomyeU0mrkq5GwnldKZK6UGcSmrpSIBU9qRrFLT0jeSmFv2doS+dIJjitVl7QWukNJnkq/snTbuBErZDAt02F+4fVVCZjMcMx4u2TtyCqqeALCXNaWkdYB8SRdanEUy20e94m3X+ypsxrtJ0F8HnbyvdFpyKp+OrHbWRya8A+TgQfIq0yzOXUAfatO0iWiR0Lg0SfuUbk2DpjfUXbEkl3pJChzHDsc/SA5xH8xHcIJv6eKxuO4uX4UlHMnPrurmXEDS1th8cbNJmAAPObyt92aM03PI/iIHhv6rGYfB+zJ1HcyQDa4gTbgN1ocFn9BrBSY67RHKTuSOd/mtuKddFyfgvaCmTtvO3qsDmTHgmG38lrs5zxjLEif1+ysw/G+0eGDjed/vzU5YzavDLGdxTY3FktNMgzpkct+BVh2NxTGkB3O20QOB85V3hcipPBJDieBtbe//RVbUyYUbACJsRx4CCpyxErR5lnXBo0sgw4GSSIkDnHqO6FXNxdUDWXucQBAOr3gRvHA8ZXUKeqm4a2h7Teb6oMwJNuHD6Kvr414JJjTcR+Unieidup0Wtrh2p1Pck8XTNzzEX7pVTXwvvQZcbEkjS0dINvFS4dhYBDgZEn7OySvjni5OrhO5Hqjz3C8TmRTbHunu/TZV+gPdaJ5ShK1Wo528DulWeCoMYA5xF+MSJWVu1aVWJqvDtLRH3z5KN2XAmSL8Y/RH5pjKbDMjoQfuPFUdfNXTY+Mp9hatwYiJPp8iqbMcLMiJ/2/3UzMW9wiZ63TahdECEQtKzDB1N0aY77fNWtZst38ChqWCeCYNlY1A0MggbcLfK3oqlTQlBpATynNiLH9U0lMnJFy5ALKWVHqXalRJEupRyu1ICQuTmFRBSMQGr7K14duVt62aMpgFxAC857P1QHiStdicCKrbgn5SqgT55nLNMUofUNg0G/pdVuXZM6z613uuRJgeA3PmiMrySmx2v8Ai4Xn0AHzV1TwwJ2M84/uVGUvtUujH0W02F1gAO6PNUNPFP8AatDSzQ4kvJnUGzwH1WudhGlsPuOWw9FDSwtIGzDsRJmY4iTdKw8cg+YZWytSIaYJEteOB3B6j5ryLFYOrha2h7YMkggzIC9woxsGwO6Fk+32Qe3YKjHaKjJIPP8AlPSCfNGGF1dVeHL45zceZ5/mJ0tLW6i6OMQj+zOSVa5BqEsp8QN3dJ5J/Z/Jfa1gyoYDDeeM7fVejUKDWjS3YKphbd11/V/UTXjiXDUGMaGgQAgMxaxzTBFpO9v7Kb8RWEgtafH6IWnmUAl1EdYHP6LSyPN79sg7G1GPhwhv52mWuPfwNhvyReLYXgO3mQYvbkZvx71f4h+FgAtcydg2R5Fqa6jRMaKrm9HHUD4Olc9nbWZMZRwbw61Q/eynLa+xAcOYWhxmFaTJDXA8WAgg9wskp5Zb3Htd/KTpd3e9Eqez2zLHVqbiSyUytjqxBDW6Z35Qr7FUXAw4Fp5EQVXV2ckbNnn5ZqMuce5EswbRaEW8lMaeae9pIKQA5DuTbA2v02TKhMqeg4R70ffVUQmjESVBjTLUlSu1uwPzQ9asSOPkmVMYICcXKMlMLkJSyuUPtFyAfKWVFqXalQTApVFrS60BLKfSaSYAk8lDSBcYG/3c9FYUw0e7MA7x8T//AMs+aAOyrDS8BoNR44D4W95G/wAuq9JwLPdAdcxsIgeOyz/ZXKnOAJGhm4aLT1PPxW0bhANrLSRNqOmANm3++KgxGJjjJ5CwHii30SgquC5m/wB8OP3ulRNC6GJ1NmwXB7uY8lXAOYZ34c/M/opzXaQSbHkVKk9SvHEKizaqIJJnfcomrVvAVNjMM+o6OE/f1V40aZ6lXLahe3Y8OfJXeGrh4Ba4jcjv42Un/ggBMIN2XaNuF/1+SudLtmQl7nmTq324Fp4eCHfVqtbuC4dBx49yHbWc3e4mf1CR9cTe42jxIUZVJTj6gF6bSOMbT/Mw7HqEXQxjXCfZiR/D9Wn6Koq0iHWcebXTuJ4/Ll81PSPSHDcbXHEcj0/6WF3tSwq4thFgGu8kK/HvG4B75+cptRgPvDjuOqGe1KwbGU83EaSCG/lIFRngLFvffuKixWFpFuts6OL2e8GH+dtiPJqCIUuFraXWtNpFj0Mo/kK3GYNw95pDm/maZA/qG7T3wg/YuWgbVvJGl3522Pi0WPp4pauHDtwGk7Ftmu7uR6fJPQ2z3sOfqlbQnZXAy+91K3AgI0Vqpp4K8JcZg4bIVr7LSocSJBTJmKhULnKbGtgoJzk9Ek1pUOXrkaC4qZbWG9N3kg3gixkL6EqYCmd2jyWczzsbSqgkCCjdDxzUk1q0z/IqmHdBBLeBQOAp3L3fCwaj1P8ACPNOAWP3YDYl7uHyB6D1PQKbLqZdUAaZcTd+8f0/r5czXUXlznE7u48undwWx7KZQS5roTD0TIMD7Om0EyYurdRYdsNAUi0QQpDTlSAJyAGOFCGxGWsduFYqKoVNNVOy8AyCmGkAjatRV2LqwiZaB7nCCqrFEX53I75t8kyrjwOKrMXipV29CQFinw6RsUBVqKbEVLIGo5Y2rg8vFxy99vcQNQ8oP+lKHzbiI0nmOA7x/bkgPxQDm9wB7og+ie+pAHMEg/MfVLZjdc38x15hKKgNjvwP6oR1f+IePfx8/wBU0kzPcVNIQ8poZeVzHjby/RS00AtSjdEYcAWOx3CbVcJSCT0TA17RFj3H6FDPqRY2QWIzanStqnmAqnFZkX/CbgSD+ZvMdyAtcTiQFX1Mf0QIxBPFD1am6cCPMKoKq6j1O9qGqNTgM1pEmlcmTQYHtZmFH4MTUI5PPtB3AVJjwV9g/wBquMbarSpVBzhzHeYMf8VJ/h3Dlw1BwbN9JEx0lC552WoSDhnvI4h8SPEKdzah2P8A2hYXEs01sO9hPFrmvHrpKzTcTQjSx3ul+p0iLAQ0X7yhK+R1W/wz6oR+DA+JpCekt1kOT0KsEOaTyXo+T5Y2mIAXz62m5t2PI9FdZb2ux9GzaznAcCdY8nKpdCx7/pSsXkOC/anXbatTaeolh9ZC3vZPtXSxbTps4btMT323TlTY0i5N1KKpUhUR8qCs9CnFXK59RQaCq66hr1RGydVVe4lQoJiqDHHZUGcYd1P3gZb6haOqzmgcwaNJHCE9hjauNQzsQSiK+Fuhn0oU3ajXukqcVN/9P1TGUipadAqTT0qliPu32VPTfLfJQNoFW+DyCo8flHP+yZUE1ENMe8TYbq1b2WeB/mf8f7pHdlQQQ57jMTw2T1S2pX5i2+gaig6zMRV4lo8lraGRMp7BT/hByQTCf4efxMqelkbgLG4Mt+o7ithUwiHLIRsMTmGXPYZGxv3cwgS0wvQK+HDgQQs9mGVRcJ7Chp0CQkfguit8JQlFjBprkZg4LouWm/ALkz0P/EJRWVR+IUtKtKNM1rrTHU2HcAomuW+ybcFw4jeOqri+E7joSuqZRQduweFkJU7MUz8Di31Rza6lZXUhVs7N1gLFrxyP91DhG18FVFVlEtjfTsRxBhafDYlEVaoKKGuyLOG4ii2o3juOIPEFEYiqFgcHmJw79TfhPxN+qtx2kpVPhcAeR3TmQ0MqYwe1DR3o1j5VNgMM7VrO5k+CPLoRBRriEFXMHvTTiLITF1eKdJJVqIDEOmUrqyBxOIgHuKmmqSRcKI0gVXf+SaCQZCIZjWHYhTVCRSCcXgIJ+J5Fdga2qq1p4kJE1OT5QXw91hwC11CiAEHgyNIjkrCmFUKmPah6tkcaaDxATIMSm6E6mEtRARmmg69JFe24HwPNR1EgBcxD1KM2KOcFGQkagfhdDuisMPQBUuKpyFJlhmyIvGk/BhcrYUgkVreXhGYJKuTntilabompsuXIpVDKkYVy5ICqJRhKRcgwuK2Wfw4/+Sz+ofNKuUKj1uiPkhcYuXK0ULW2Chr/AAhcuTEAVlXZifcd3LlyimzLLgzfvQ2IYALADwXLkqoK1xndWGWn94z+oLlykPWMt2Hcrli5criKVyCxS5cmQR6HJSLklJ6QsoncFy5IkL1GVy5ABYpMyv4ly5Ke1Y+181cuXLRq/9k=',
      name: 'Hello Kitty'
    },
    text: 'I hope you enjoy learning React',
    date: new Date()
  }
  return (
    <div className="App">
      <Comment author={user.author} text={user.text} date={user.date}/>
    </div>
  );
}

export default App;
