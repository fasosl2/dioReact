import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles'


const Card = ({}) => {
    return(
    <CardContainer>
        <ImageBackground src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxMUExYSFBMXFxYXFhYWFhcYGRgXGBYYFxYYGRcXGBkZHyoiGRwnIRgWIzQjKCsuMTExGCE2OzYwOiowMS4BCwsLDw4PHBERHDEoIigyMTAwMDAwMDAuMDAyMjIwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMP/AABEIAKABOgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAMEBQcBAgj/xABQEAACAQIEAgUFCwYLCAMBAAABAgMAEQQFEiEGMQcTQVFhIlRxkdMUFRcyUoGho7HR0iNCYpKywQgzNERTcnODk7PwJCVDY3SCwuGUovEW/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAIDAQQF/8QALxEAAgIBAwEFBwUBAQAAAAAAAAECEQMSITFBBBMUUaEiMmFxkbHwQlLB0eGBBf/aAAwDAQACEQMRAD8A13MMUIo5JSCRGjOQOZCqTYeqs6HTfhvNZ/XH+Kj3iL+S4j+wl/y2r5giXaqY4a3RPJPSrNiTptwx3OFnA8TH+Kp2TdLuFxD6BFIvixS30GsRljDIVFUoYqdiQR2g2q+THDG1av8A6ThKU06dP5H1UeKYrXCk+giqLOulCHDkh4JT6Cn7zWKcOcSyo6qzkjlv3VbcYYsyLq9Fqpjw4pxbRCeXLCai/M0VOmvDH+bTetPvpt+nDDA29yz+uP8AFWOYcG1WOQZE+KkZFIGhGkYnsVedu80dxjrgp30k9zYMp6XcPO4QQSqT8op+40WQZ4jC9rekivmTBZ0sT6lDeBqfNxvO2wkZB4VNww1sw1ZtXGx9DY/iiCEXkYL6WFU+I6UcAl7yqbdgIJr53zHMpJm1SSM39ajDgDMsuVdOJYKf0luD6qmowbKNzSs0GHptwTSrEIprMwUPZdNybA872+atCgxIZQwHPestwg4eLrIJIAwIIvZdxyNjRrhOLcAQAuKh/XX76VxXQbX5kniXiRcJE0rRs4UXIUi/00EN08YQfzWf1x/iqV0lcQYV8LIi4iMsykABgb+qsIxK91a4JJGRm3J+Rtfw+YTzWf1x/ip3D9OeGc2GFn9cf4qwYoe6nMNKVNTorZvM3TXhl/ms59Bj/FTD9PGEHPCz+uP8VY1LjLjlUKeS9FDM3D4fMH5rP64/xUvh8wfms/rj/FWEUqUw3f4fMJ5rP64/xVMw3TPhnFxhpx6TH+Kvn1aJsoHk1qEk6NjHS/B5vN60++ujpcg83m9affWVKKbnzCNDZib+AJ+z0j11tCa2bvknFqzxdaIXUEkDUVubdu3Zz9VTJc9AF+rJ+cUGcL51hfc0IWeIfk1updQwNtwQTzvermPGQtsJYz6HU/vqbbsquD1i+P449jBIT2AFd6hydKUI/m8t7XtdPv50KcYyDVqWx0Nc2PMb6uXzUO5ri1JsdnBAPfbbyvVamQtsOsT034ZDY4Wf0gx2/apo9PGEAv7lnt6Y/wAVZhjcJqcgDYb+Hd/r0VT43C7nb/8Ae+g1M2X4e8J5rP64/wAVL4fMH5rP64/xVhsgt6hTdqDTdvh8wfms/rj/ABUvh8wfms/rj/FWEUqDTd/h8wfms/rj/FS+HzB+az+uP8VYRXVF9hQB9PcM8exYuYQrDIhZWYFipHk222PjRZWP9FSEY2K/PqXB/VWtgrZKmJB2iBxF/JcR/YS/5bV8ws1q+nuIP5NiP7GX9hq+Y8SgPJhXR2b3rJZ+EMtyJqmaiLBYZWOlmG/zVUZphgjkKbj7Kp2lWlJCYJq3EjRsQQR2b0VZhmaPAq9u1CYFPGLa96jiyuCdLkrlxKbTb4LyBfJvV/0aSXxMifKglH0UHJmBC6aI+izEXx4/SjcfZXRLPGSSRz9zKNtlt0PcIYPGnEriYncxFNGlyoAOsG+ki52FHU/RJlWq4w8wB2AEjHf52JoZ6CpGXGY5AQBa5BJG6yMBb1mtWxuPCXUyIjEXBJvbxtXLpt0kdimkrZn2I6MspR+rYYgNtyErDfl5QUj6adn6IcrVdRacD0sf/GixswkUavdcb230hVu3htUA4/N5CZIBg+qJOgSGQuANvK0C3MU77Okr/l/yjO/+C+iBgdFOVsARPNYkgHfmNiPi1w9DuXkXGImHq/DRacRnPNUwIHaC8xJPbuEFqdGLzjtjwX60/wCGleFdPuMs/mvQCT0M4I8sXKP1Pw1GfogwXIZgb+JjrQRiM27Y8H+vN+Csc4syfHe6J5pYX+OWd41fquQ3UkDaqYuzqbdt/WzJdor9PpQQHocw/wCbj/2Pvrw3Q0nZjh+qv30AiZvlH1mvQxLjk7es1d9gj+5i+Kj1gg5+BZz8XGKf+z/3TTdDE3Zio/1D99FvRPjDLhLEbq7KTfny3+miTMsLJoPV6b+JaoS7PUtOplVmg1en1MnfobxHZPEf+1vvri9DOKP/AB4fU1HnujEc9cO36TVRZrl+NkcyJjOrHyVLEfbVF2N/u9BX2jH+31YOy9DeMAv1sBt4v+GqTC4V4neCQAOh0m24+ar/AD/GZhhk1+7mf5/vvQ1kszSF3dizMbknck0mXD3a35Jymp+6qLJRVT7ynEYiVQ+nTpO4ve6jx8Ku0WoTMY8SGBtrj2Pih3+g1AWLoq14XldxHEQ7MxUD4u4F+3s8am4vo5zKMX9z6h3oyN9F7/RWicE5AxxPXPyWIbfpTEH6FQfr0eTAAUktnsVjutz5qbA4wHqikwsd0IcAE+B2opyvo/lC+6MXP1USgs4Us0lgL2vyB9dabi9DsF2JJ+imeJxEuFkMrAR3Aa4uLX3HfuNqSUmUgk2gB4nyAR4dMdgpJGiIuVkuSVbt33tQWmOV2u+3K/dW1cTYpFgeBFURDDswAAsBpGkDw3rBXXc0RfQbJDZNFhm0ajYEEdhHI1XffS1m1r7Uib0xI80qVKg0VT8iw3WTRr+kCfQu/wC6oFG/BOUaYzO3NxZfBQefz2poq2JklpiHnRuv+3p/Zy/YK1msp6OxbHp/Zy/YK1aifIuL3St4n/kmJ/sJv8tq+R+sPefXX1xxR/JMT/YTf5bV8i0pU9dYe8+ulqJ7TXAtSFwEh5I/6ppkpPgz2VyR67qPfUxcmnPKJ/VTc+BkX4yEVuia6MxTg3Sa+pFon6MpNOPi8dQ+ihoqRV1wNJpx0B/T+0GiO0kE94sOeiU6M4xalQfIn5gm1pl5WBrahCeelPV31i3R5iUhz7El3VFKzi7MFG7KwFz27VqWacYYaMArPCxvy6xdvVeq1KTqKJppRtvyHcylxCoWWONQvPcsSPAWFReG5zoQXtcyX8TqPh6ai4zjjDdVcYqAM3YHDFfG1OcNYpniDRRrKhZiJusCgkk3CixPPar01iepdfzkS/a2ZeKeZv8AZXezx+amkln7YYx/ekn9ivEmYshAl6mMnkDJ94FQpvgrqQsdmEUK6pG0i9r2vufQKzTjzOsZK7R4Z5ZIJFIYLAbC+2kPoub70Z5nnJLHRjcJGt7WNnPr6wD6KinPlHxszw3jpVP3yGunCtPtVf58iM5atrMdHDmKPLDT/wCG/wB1exwnjvNZf1bfbWtniOAc8zjt4CL7jTEnFeDUb5iT6FT/AMY66nkm/wBP3/onpj5kXoiwEscEsciFHEpuDsd1XuozxGELAqTsRY7n76p+CMVBM0zwytIC+7HbfSuw2FW+f4xYIy5jeT9FAWJ+YVyZJPvKRaNKFg63AmD1E6RvufKb8VM4jgbCaSFst+0E/fUKfpGw6MVOHlDDsIAP0mq7M+kyMoVSBtXZcgD6K6FDLy/4J6sfBR8V8FLh4Wk69mtcgMdvChnhvkfTU/P+KZMQhRkAHpJ+2oHDP53prm7U1sNHqXyLU7J+H1xcyIzFOrvJqFri21rEWINxURKfw8rIbqSDYjbuPMVyM2LpmpZPl/Uh7szl21MzaRfyQoACgBQAAABTuOmAU3/0Tyqr4GxbSYYlySVcqCeZAVbVNzEaha16kzpu+AfLWlB1dw9OwP7vsrzn+TPj4WiWYRornX5OosAoIA7ufOm82gs1xsWI27v9b13LOI44FkWS4a+pbC+raxX6BU3yPjtFJxviVhw8hJN3RMPCDzKoACx9NhWUMu1E/H2fS4mYF42jVb6AwtcHtoZJpkUm7VDBpV1hXKcgKlSpUAe4kLEKBckgD0mtWyzCdVDHH8lAD6bb0B8D4cPi47/m3bv5DatKkSrY1tZy55b0WfAI/wBuj/qS/sitRrMeBB/tsf8AUk/ZrTqTJyVwe6Qc/W+GnHfDIP8A6GvlrMsEqvYDajTEdJ+ZOrI0qaWUqfySciLGqTLsjxGM614ow/UoHlOpV0qdVjuRf4rcu6unHi0L2gmpNporckhQzxqR21tmCyyAIvkLyrE8ONDCReY5GiKLjrGqAokSw/5a11LZUjnlhblb8jUJIYwNkX1VnHSCy6tlA+aoj8cYw85F/UWqnMMwkmN5Df5rfZWp0mI+zytcFFjmp7hl9OKhP/MX7affBoeY+k1PxXDkuHWDEPHpWZRLC2oNqA0tewNx8Zdj31yTxSc72OxKo0NccLbMJvFwfWoqvtU7MX6+Qyybu1rkbDYWGwprqVq+KLgnfmI4ukRxW09E+CSTBRktJs7eSssiLz7lYCsjwmBMkiRILu7qiC9rs7BVFzsNyK0jIck4gwkXUwQoqXJ3aBjc89y1blmtNXRixu7Yfz5FGySIrSqWBAfrZCy37VLOaB8x4Oy/rCs+Kxksiix8l5SORAusTd/fVFmHSJmsUjwySIroxRx1abMpsRcbHlT+SccZvipRDA0byEFgpSNdl5m7ECpx1xV36myxp8Iu4eDMrHxYMY/pjnUesooqYvCOAVdQy6Y2+UxB+mWh2fjHOkhjnPV9XLK0MZEcbM8qs6lAi3Ym6MBtvbxq0fH8SiPrOpFrX0iOEvb+oGvfwteteSa/V6md0nz9iMubZcDpjymZjy/iQx29JNSoc3UgLFk0gPZqjRPpIqgfj3NxGZSoEatoZzAAqve2gkjZrm1udV79ImYH/jL80afdVYyvp6szu35+ho3RuXEuIEkPUMzhhHty0gX227D6qLM3xCohLDa3desGwnG+NjmaZZQXZQpJRSLA32FrdtXuVcZZvjWeKHqpCqF2BjiWyiwJ8oi/MVHLC56+hSKajRG4m4khxIKRwHUGI12HYeY070K4lO+rocd4zTYGIDwiQfur3lmVNjYZZ3kCsjhdl2I06uz016GPKnDTRyTwu9VgpKNjUvhn8701Fxg0llvexIuPCpPC58pq83OVhwESU8oppBT6CuUGF/A2YhUeG9jqDDxvYH7Kunm2O42/19tZ5gjIZ0jiIDEMbnlYDt+gVZjPWjALju1Nbt7r+H76nNFoSdFpm5sC1hc8hQlj3BYE9p/0KkZjxCpudV9rdnf9PZVAmJMsiqvaR/r6aiXRo+XYNJIVDorC2wYA/bUTH5bEgOmJB6FUfuq9yjClYlU9gFNZhhb0rMszrOcCDyX6KHZsh8OfhetGzHBeFVXuPesU6GoCJeH7Du/141UYvD6DatFxuDsKD+IMNY6qpCbbBoldHeHLYoMD8RSSL2uCCPn3t660iVayXIM1OHmSUb22YD85TsR+/wBIFGeV8cxzS6GTq1PxWZr3a+wO1hf01145JKmcWaEm7QecCQE4xW+Sj3+cAVpFZ/0fkHEG39G32itApMnJXD7p8qUf9EP8Vmn/AEyfsz0AUQcH8UjBJiVMRk90xCK4bTosJBfkdXx/DlXoZE3FpDIJnweWYbDZXJLgetkxMShiHKKSRCGkcfnsC4sNhu3hVkMhyqPMzlpwbOZVMnWNK2mK6Fgkaje1lJuTe57uQNnHFAniwEXVFfcShSdV+tt1W4FvJ/ivH43hVhLx2GzRcz6g2VNHVdYLn8myX16f0r8uyouE/j16/Q2y1TKcvw2XnET4UzumNmhXyyjOEkkVBIw/Nst9hzAqzynhbLsS+BxkWH0QzmaKSBiSodI5CCN+xonG2x2NhUePO41ybr5cMk8cuPmLROxFg8srAq4GzA23t399U03SW4mwzQYZIYMNq0QBrh9SFDdwo02DG1gdySb0tTd18eobC4HyTDzYvMI5YldIY5zGpvZCkpVSN+wC1X0uX4eaPIosU4WI4Vzu2gO4iw+iMt2A7+m1u2qeDpHgjeZ4stjjMyOJGWS8jO5uSTosFuSdIG5N9qrn41jKYKN8Gkq4WB4WSR7rLrSNS4svkMNBtfV8Y+mmcZt3X5RgR53wWsjwwjLRhusnVBiIJuujEVmZi6kCzELYXFrnn2HxFhcokxpyoYJ1Op4lxIkbX1kaksSD2XVhfcXHK1UsvH4ig6jAYUYUGVJWJlabdGDBVVgAqkqL78ri296lHpJiDnFJlsS4xlIM+skAldJcJpve23O9tr1mnJX++vJuxQZbgDBmkMBNzFjoo7/K0YhQG8L2vbxrQOOMDhXxkrSZzJhnIjvCrOAn5NbbBgNxZvnrL8DmTJiUxL3dlxC4h97F2Eokbfsub+upXF+d+7MVJiRH1fWBPI1araEVOdhe+m/KqSg3JP4GF9xFk8CZTFiEtJK2NniOINy80ayYkKxue0Ih+aivhTKYIcTlUkUSo02CmeQi93bq4Dc3P6TeugrJeNI48EMDiMEmJjV2kj1SFLMzM29lPazbg8jarJekxevwswwgUYeGWLq0cKh6wRgaPJ8hV0ct+fhSSjN2vmBcDN1wuX5diHQuseZYkso52Z8atxfmRquB3ipSLDjp2ny/Opo55PKWCRtSbDdVhextYH5VtzQfBx80cGGiTDqXw+JlxAaQ61brWnOnSACCBNs1+a3tU6PpFwyP7ojymFMRvaUOLBmBBawjBubnuO/OseOXKW+/l5m2X2MxcMGTzCfBqxixHUzIZSRJPdQcQX03uSQ9qa4f4Vw5TDxyZQ5WRFEk8kw61WZd36tTqCX7Ra1722oYy7j38hPBisMuJE0zT31mPTI1jyCnYFQR6t6ky9IMMk0GMly8PiYgq9aJ3VSq33EYW1/Kbne1+2ju5q0vv/oWTv8A+UweBjxWLxMbYhI8QYIIdWkEXFjIR27kd1lva5qd0c4vCz42VsJhmgvg3EiF9alzIttF+Qtbfa9+QtuPxdId3xKzYVJ8NiZetMDvYxtZRdX0m/xVPIbi4Ir1lnH8OHxBmhy9Ik9zmBUjksxu4bW7lbMRY9l99ydrDhNp3z89jTnFuRwZbhYsK0Ilxky9Y8zBtMS7ArDyBIIt4XueaimuCshlxWGnjRwo60XJvz0DuqFPxb12AGCxMZmkjYtDiNdnj8GBB1j4wO4uCO0Xqz6PZ51gmWFlUGUFib89A7B99dGJSXzJ5KoouKeDZsMflrY72tb5qqeFvjNRlxdiJeqJecFrHs+y5JoN4X+O1J2qNUSjwwmjp9KYjpYrEhFvXEYQs9zJoHSReY5+g1R5pxRJKxYWAa9x2X7/AANRs+zIym3YKqqWW50QVIkNjCTc0Q8A4oHEopIub2v2nuHjQrTiOQQwNiCCCOYI5EUjimPZ9KYBvJruJS9D/AuejE4dJLjWBokHc457dl+fz0RMb1NqjEyqxGDvVdjYo4kaSRgirzYmw/8AZqdxJxLh8Go61iWYErGu7Nbt8B4msg4q4jlxkut/JQE9XGOSjx727zRHE5GudEziDjAuSkCaV+Wwux8QvJfnoVnmZzdiSe8mnG2phzV1BRWwqk2eCKVK9I1gxp/8HP8Al83/AE7f5iVvtfPf8Hon3ybfb3PJcd/lJX0JWAfKdGnRbkuGn92PiYutWCKORRqZSP40tbSRzCDnQXWh9C+HaRcxjX4zwRqt9hduvA3+evTzOoMRHMowGTZkxw8EU2EnKkxMza1YgXItrYHbe2xsDY0N5ZwRjppJYo4bmB2jkcsFjDqbEBm+N37DkRe16LeDuBpMvmXHY+aGGOAMVAfUWYoV7htZjsLkm1W6Y6HNMCwjwoxDDESySYY4hsM9mkco5Kg69iux2vfe61B5NL9l2vsbRnq8DY7rJYjFpeGPrGVmA1Jv5Udtn5W27xUDKcgnnhmniC9VAoaRmYLYEEgL8o2HLxHfWh43id8JjMvhlwy4dY1MbWxHugiGbSuh2KgjSyRtuTsu1P8AEDwZUuGwgsUmxzYmaw5QJKCikfo/kR49U1b3suK54/kKAkdHOZdT13uc2tq0al623f1d7/Nz8KexWRxe8+FxKRH3RLi2hLDUWZbzhUC3tfyEGwvtWh4/At7u93w4BJbqGTF++DxoU0WsY9JAXmLAEdtVuBzuIYPA4uZBHG2a4h2W4dYjJ7sAOoCxCswNwOy9Z3smk/z5BQE4jo4zNIuuOH2A1FA6NIB4oD9AuaYyfgfG4mGPEQxB45WZVOtRbQWViwPxVuhF/Ed9aBl3D2LgzSXMZsQgwl5ZDIZbh4XVuqj09gW6+Hkbc6jY7LZcflMS4QquvHYqVY2fqusjOIxJCDsJGpW0n5J7q3vpfD5hRn+Z8LYyCdMNJC3WyfxSrZhJ36CDY27b2t22FSs84Gx+FiM00P5MfHKMr6L/ACwpuB47itRy/MocG+X4PFyq2JWGRS5a4jLBdIZzyuBoBPPT41TYzDvgI8ZMMrREdHWV2zB5BOHO7KjodTbk72PMdtiLNJ9P9CgIxnAuOjiM7RDqlh68uHUgJa9u8tbewoeo96W8Q4XARh20HCKSoYhSfJFyvIm1AVWxyco2zGKlSpVQwVKlSoAVKlSrAFR30ZZLHiIZy7EWkCgXPagN7XtQJRVwbxMuFw8yFCzO4YbgAeQBvRv0MlwW3EPBuEhjeW5LbkXP2CgHhr+MerTOeJ5JAQzKB3KP3mmcgyxlUzahZrG3geW9TzrXHbpuyfBcx1U8TOQtWqVU8UfFrhYR5BPEnemacnO9N0jOhCpUq9xxljYUAXPB/ET4OYSDdGsJV71vzH6Q3t/7rYs94nhw0HXEhiw/JIDu5IuD4L2k1iEeEA3O5+inJZSbXJ2Fh4AcgO4U3d3yTc10JGd5tLiJWmlbU7eoDsUDsAqsaQ112ptjTNhFeYmc02a6TSBpWOlR5pV0iuUgxpH8Hlf95Oe7DyftJX0JXz//AAdR/vCXww7ftpX0BQB8v+9T96/T91e0y6UcnA9DMPsFWdKr+IkZSKqTLJGN2YEjkSWJHouKS5W4NwygjkQSCPntVrSo8RIKRU+9L77rvuee57ztXp8tkPNgfSWP2irSlR4iQUip96ntpuukm5FzYnvta1eve2S1tQtztdreq1WlKjxEgpFT71PYLdbA3AubA94FtjV7jMcz5dBgNABgnebrNR8rUZiAF07Edbzv+bTFKseaTCipOVOb3Km/Pc7+nbeunK3IALKQOQJO3o22q1pVvfzCkVbZbIebA22FyxsO4bV596n719Z+6ralR4iYaUVPvU/ev0/dS96n71+n7qtqVHiJBSKr3qf5S/T91c96n71+n7qtqVHiJBSKn3qfvX6fupe9T96/T91W1KjxEgpFT71P3r6z91VeeRvEVGrmCdr9hoqoc4w+NH/Vb7RWSzSkqCkUsIuwB76LsBjESMJqNhyF9h6BQjCpvXudjepxkLKNhquaxfKqm4gxwkXyeVDl6eSUnbso1GLHW4y1cr0/OuKtzasKDkEJY7cu091Tk0qNq6iAKB2fbXhqtGOk55T1M68wtTBekxptjWNmxieZDvTZNOXvTZFqRlUcpUqVKMdvXKVKgDTP4Oqj3wlPaMO1v10r6Ar57/g9Ae+Tf9PJ+0nqr6EpQBfiHhfBrhp2XDRBhDKVIUXBCNYjxr5mMMvc3019Z53CzwSogu7RSKo2F2KEAXOw3tWDP0fZ2Rb3EP8AGw/tapFRfvMSbmn7KAL8pyu3rNeZGcc2PrNGT9FmdE39yfXYb2lNt0S5yeeE+uw/tKHp6Gq+oHdc3yj6zS65vlH1mjD4I848z+uw/tK78EeceZ/XYf2lIMB/Wt8o+s1zrm+UfWaMT0R5x5n9dh/aVz4I848z+uw/tKAKGOUnCtudpB294rzg8UAnlMeZ7TRTD0W5wI2jOD2Ygg9dh9iP7yo3wR5x5n9dh/aU8Z6XaFS5KJs0UcrmuDPXB2A5W3q++CPOPM/rsP7Sl8EeceZ/XYf2lN30ugaUDU2byt+db0VHbEuebt6zRb8EeceZ/XYf2lL4I848z+uw/tKRyb5ZqSQONCdAYOxJ8TXuFSBuTf0mixOi/NxHo9x73/psP7Sm/gtznzP6/D+0rdhPaA7FSMG2Y+s14UyHtb1mjJuirOD/ADL67De0p6PopzW2+FI/vsP7Ss5GuluAxdx+cfWaSyOeTN6zRkeiTNr/AMkJ/vsP7WvS9E+bD+Zn/Gw/taR7DLcEo4nPNj6zXto1Hxjf0m9FLdFWc9mD+uw/tKbPRLnPmn12H9pWU2bsCxxAHIUxIxNF46Jc48z+uw/tKkxdEua9uEP+Nh/aUcAAemn4YDR38FeadmD+uw/tK6Oi3NfNPrsP7Sscn5BQBSQ13DRm/wBnpNGz9FebeZn/ABsP7WvWH6K82BucJ9dh/aU0HvuJP3dgUcdndTLmjNui7N/NProPaUy3RXm/mZ/xsP7WuhyRCMJeQGPTRNGh6KM48z+uw/tK8N0S5x5n9dhvaVNstFMDDSvRl8EeceZ/XYf2lc+CPOPM/rsP7SlsagMIpUafBHnHmf12H9pXPgjzjzP67D+0rDQMpUZ/BHnHmf12H9pS+CPOPM/rsP7SgC1/g9PbMmFr3w8m/dZkr6DrHehzgTH4LGtNiYOrQwugbrIn8osptZHJ7DWxVhrO0qVKtMFSpUqAFSpUqAFSpUqAFSpUqAFSpUqAOU3JKFBLEADmSbAekmnKoOKcPrAFyPJfxB2F7q3kMPBvm3pMk1CLkx8UFOSTdF9XkuOXhf5qFMoxE6MQpumtgVbVo/jSraC3lqwA2WxTuNERkDDUdgUbuJ7PmpIZozddRsuLR1tEjrktq1LbvuLd3Ol1y3A1C55bjfa+3zVUiRLg6m1aiPigAWsmoi99Nl537DytYe0Kaeb6W21eT2xjV6lBN/A1YkWyMDyN69VU4fEBLgXPkggWUGwbSLG9uWk2tyIqUcetidLWBsTtsb2A5+j1jxsATKVR8LiA4JF9jY377A2+a9vSDUigDzelqoT6U2IwYIJH5VORt2NQViOHZ0wSYwu+7XZLnaJrBH9e/oYdxrpxdnU4qTlVuuDjzdplCTio3Svk2C9K/jWTYjASzYXBss8aWSUESS9WW/LNYjvFQ3yGex/2vD//ACTXHlk4TcaunR7vZexY82GOR5ErV1V0bPXaBc9gL47q0mgMx6gxBpwJYFTdwIbhrN8a67tezbAVBhwOtpGSeBZMN1sk+JGJD9ZIraojPGD+TUFTq1W0gMq7E055xpFKsymWMvFIMThpTJE5ZhPDY4gu8kujWxOldQA07gKO6nOHsuZjGIcbCWR0KtBKjx6xhj5DxByXJIYvv5SgMNJFwAaTSrNMkwrGy9fh3lhMDSTpiQxwiRaRNEyA/FJWQXNgdZ1WK0ewZhFNEZIZUkQhgHjZXUkA3AZSRcUATqVVWbZhJG6qvV2Iudbad9QG2/K1RDnEt+cAFjuWFwdF/KXXsLle3kaACClVC+bzBiLQ9tgZLHmbE77DkD4gjur0+bShm/iQgVmBLjYX0pc6rWJ2vtvcbWvQBeUqHxnEt23h2Atd1XYX1HZjy7eYFjvUjDZudYV9AWx8oML3XTe66jYb9hPZ2b0AXFKuV2gBUqVKgBUqVKgBUqVKgBUqVKgBUqVKgBUqVKgDlVmdYVnAKi9lYW7Te1rA+SfnqyvXankxqcXF9RoScWmiBFgd7se3kO3e4ueZ9HKnygBsALaWAHZzG1SKVLiwQx+6glJvkpHaYDUsYYgEm6aWuVcsq+AbSQe25F97iZgIrhtSAEFlA02GkbLbblpA7/3VYUqsKM+50+SPUO4D7APVS9zJe+kX37O+9/tPrNPUqAG0jAvYAXNzbtNgLn5gPVTlKlQBRcY5G2LhEKsF8tWJIvYAN2dvMVTScI45lKNmJKlSpUx7EEWItq5Wo0rlVhnlFUq+hGeCM3bATMOjt5IsPH7oAMKupPVk6tche9tW1uVQ26KZCLe6k/wj+OtHIrtc88cZycnyz08H/o9ow41jhKktlsv6BvH8MyySuTMiwySQysojPXBoVQDRLrslyg30k2JHbcQ4uCpDC0LzpZcHNgoSkOiyShBrmGsh2HVpsukX1n87YypU5xAlDwlOJIpDOl0ZdZCzMzIrhwl5JmBB3HlA6b3Wxpt+CpC6ye6dJhkllgAjFleXEPM5kuSWBBSPySp0ht/KsDGlQAGtwVK6hXnj/JB+o0QkG7zLL+XLSHrEuijQNIO57rXOUZVJGJmkdGlnbU3VoY41sgRQFLMb2AuxO/hsKuaVADM2GR7alDW5XF7U2cui/ok/VFSqVAET3sh/ok/VFdXARjYRoBYC2kWsG1Db07+mpVKgCL73RWt1aW7tIt29nzn1mvAyuEf8JPUNvAdw3O3KptKgBUqVKgD/2Q=='/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/66625225?v=4' />
                <div>
                    <h4>Pablo Henrique</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito para curso de HTML e CSS no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp />10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
    )
}

export { Card }