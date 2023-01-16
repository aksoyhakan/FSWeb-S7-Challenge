const firstData = [
  {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg",
    name: "Mc Donald's",
    detailInfo: ["American", "Fast food", "Burgers"],
    delivery: "20-30 Min",
    fee: "$5.99 Delivery Fee",
  },
  {
    url:
      "https://seeklogo.com/images/B/burger-king-new-2021-logo-F43BDE45C7-seeklogo.com.png",
    name: "Burger King",
    detailInfo: ["American", "Fast food", "Burgers"],
    delivery: "15-20 Min",
    fee: "$4.99 Delivery Fee",
  },
  {
    url:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADdCAMAAACc/C7aAAAAw1BMVEX///8AZJDjGDYAYo8AVogAWIkAX43h6/EAVYgAW4sAZpLjFDQAXYwAVYcAYI0AXo3u8vX3+/05faHiACPhABzS3+eNsMZklbLiCS8jdJwabpjhAB9Wja3iACb51trZ5ez98/T63N+Zt8qDqcDxnablLkf86+3kJEDwlqCtxdR5o7uhvc7xoKnhABX40NS80d32xcrmPVJMhqcATYPyqbD1uL7rcX/tgIzsd4X75ejqY3LoVmfnRlrvjJe3y9hxnLYASYJSfXXxAAANs0lEQVR4nO2deXuiyBaHQ4qtCCqQIMGYa1p7ei7a3Same+6sOt//U122WqkC3GLB4++fPNEqqJdzTm3A8ebmqquuukqs168//nPpNpxZPx+fnp+/vf1x6XacU1+/3d2menz8dOmWnE9fv90Wuusv5deHW6S7555SUoy9pWQYe+qxHGMvbVlh7CGlgLF3lJ9FjD2jFNqxZ5QSO/aKUmrHnPK+F5Q1duyNLRsYe0HZyNgDj23B2HnKVowd99iWjJ2mbM3YYY/dg7GzlHsxdtRj92TsJOXejJnHdmxD9gDGzsXlQYwd89gDGTtFeTBjh+LyCMbOxOV/j2HMPLYDtjzKjh2hPJqxA3F5Akbl4/LIeMSUKnvsiRiVpmzFeJeqRSlV47IF4+P9w+3b2+3D/WNHKZsZHx9+e33Jir78/O2hCVNJj21kvHv63wsp/vL7Q4PXKkjZyPh4y7X5+12DMZXz2GbGX174Ol9+7RZls6/evVRrfXnsksc29zlP30X1XhuvjTq2bNGv/i6u+WdjH6sKZYvx8f6LuOofjVXvnpSgbDMH+FNW+a/mWYEKcdlmLnf/U1b7x3Nj5bv7iz9T2Wq++iBt5qcW1R///kgggdqtO75J6780WzKtftnl5edvzU1MdS89wMttiyWJ3Ns/RI2TlkJP0gO8tFl3XRiyJWWNu963qX7p3ZBWlA/SVn5/aq79+PaRQKwW8/zPy20z5fMP2UE+txhC5Jfo7Brbg5Ky2ZbyQeCtMSTvxNPeD9HY1jS7oGzhsU8SY3xvntY9XJBR17Q9KB//Eh/m78YJ+oXtmElvG5dPwlHgR1O3owIjtmVzXD4IptmNzqoGo6YNWnqsYGH4/blpY+CSjLpGqW1c3j1x48jnJ5UZbY1R67i8//uVHOX1rWmuoxIj9tjmuHx8+vWf108vL59e/7l96kK/KvDYFrOCu+f7h1T3Tdt0KsXj3rZsLdXsuFdcdphxH49txXivIuNpPVa9eDy9LdX01dPGpcqMp/LYS94YqPdV1mN/OYLykrcF2jCewpaX7FcXrRiPj8tLxuOiMR55jz3MlqrHI095SFyqH4/H27IL8Yh0aFx2Ix6RDutjuxKPSIfEZXfi8XBbdikekfQ9KS9px0MZ9/XYS8bj4Ywp5bg9ZTftSNuyxe5WR+2YqW1cdpmxrcde8mGk4xnbUXY3HjFlo8d221cL6eN6yj4wNnmsSvEITJjKBY1IAFTK1FEqFI+uHSy26/V2vNHdOkBoj+J4YujcxZBTquOrI33hoW/8+UiGaepBYuWFZvOJwWDK4lIdRmPjMd/uDKHTwmBGFdo6ZrMt1YlHfcF/nwgoQTm5IZoaIlvSlOrEozGullhXdwr0dfU4DGXVlur46mgqKjM3WETN2ApKRVBkSxSX6jBqmi8sFTARp7lLYalY2PsUtlQnHjW4EhcLW12KcMC6NEWpTjym/Ym49akpaSO5fKcjLEXHpUq+au5kJVd0vNmyS7GG7PFwXF7Qjgnfa0JRf5LLoroesJGV8jlIRPnlgi+zOPz4Z1iyov6Q8lbBKFMq4I+oy8t+jGaVhYfrSQs7bex9E5n8IS9NueZHPzCSQ06IjWB1IoC0rEBqg8tSVi0J5ZB0KTnkbsQfEsDwHG1vr2pMShvkjShLJtIjRkPuiADOpIU/RtXeVTIXSMd5yrVN8XwnU8xdtovb8SZbRbFtMqWDw4JaVYKJrJQ34BkvbcdMS44SysYQhy41kJVasQts4KrAWKGUeWLCFBvJJkZskKthx0xLtou1he3yuf5EMmlYMZdCHUbelsARldlww58ZiEp5UFVGnlLU/h0/JdWgwGF9pmtVJR6ROMqYmxH40wpj6rCV4PWZhbVadszExqXpMqPl2qnMYnJbcnt6oaM2Y6WPhc687Fm8JNYlu+hDOCbLSiuyVfbVQhwlcAfOJoqmExvKbxQAV5+uQsuz1vNgYLLfqMhYnRWkXpuq6VaICQ1dN/hbJir6aqHlye5qqcsosuWBjIr6aqHTUAJTZUZ+n/9ARoV9tdDxcak+4/Eeq3Y8Ih3nsWDUBcbjKLvgq4UO99juMB5O2RVfLXSYx3aL8TDKLvlqof3Hy+4x7k/ZNV8ttJ/HdpNxv+cJu+irhdqPJN1lbB+Xqq+t6tUuLrvN2C4uu+yrhZopu8/YTNnVsYNVPWXX4xGpjrIb+wBtJKfsQzwiySj7EY9IYsp+MYopgfQRiq6qStmneESqvv/TNztmYin7Mj7yoin7F49IhBK4fWUklFQ8estoJ394tJNa2EOQmlHDjP50tQqljxx2VOsNtJ0FeeRjG8arXSh/VrsXSmZBEPYd0p/O/bnw3a4+ydotd/3taa+66qqrrrrqqquuuuqqq6666uRajxer45fSfjI/wVHOJGuiuyasZi7aUwsdutCeyvJvXFZWmYXJkGYRaaWoeLzGdBoo5xGv3TgJz31p8Ouk9jGvpW/RC+BuVF/QNStyoT4K5uf0dAvfTJAnhGkhkkLErt+hF90ezu9kGJvzvftPctWA+IjDkDf5DXl2ikwSyFRDe3quOxgUpPC155Yir97WpODIJIfUtJFZX/dgkbQ9R7nrFL+Oqdd7XR2kBgbSBBjHCXc878fcp52hfB3AqO8payHTiJZnKTlGHswpwZED5VYvEqqYDb1rA+RxfbxcVqy7LoTHJuGxdpOskUaDPzRBytOUHKlwPk5O0LFl+bZE6RCR1tlJKB5jkMuAzOvVlatthWE4a5otWDPLr/+gTl5aWnLc9NzMpQlMzaCc1UtFfz1Nwl1IQaY2933/xp8lG+Z9ekg3LtwBw4CGYQRz+mDJuFTm3N48gDAtNMEv3yfT/AMH50pdo/L5bcsQ/Zd3c9tolJWGAd/p+ckmO7NhODscQ7E7LNPe3VirqZNWS6tOIjRpH4fxJoxoSHLxZjFlTCrFUBjr6Avg6ktM7727heDkxl/qbpGWF7huPgQloOxmANSLfswfwbLCv3lL0X/vVl64uMQAAqY/GLv4G3MQl18l75siHmcb28VtM+Egzs+085zAH4shUy8gCVnIpGTHpELQIEDDKM4iBALLYfLzpW2Z0o+92LnpfJy3Z5CfDB3WsOjCaWkyTs8mbF4Uuxxgy0bPB1xylaHhJJklo53MkmkzqLxAaGIY8Mk9gF4a2UNNAxM2tzLQbgI2w5DrM5A2AwliNrcGwCnH1jafVgsGVBjNBb/PArI05JttOA1lkHTCxHLOFAgSDpfDqCd/2jXmrnDu/DJIjU/L4JbjaCiAMMm0d2aL8jnko996y/SuLKRP3oSAeeLLaiKa/ECzeshKs/P8WlLIavXiIgrzc5MFFp3sD5cckk6XfMvlQSJnzpNFia6lhgK2BrJSYbIXZBEqfDajUjp6pASnHgHp+GfoMHNtQGXXk0KSqzPMHt2gUwXRcWckPCQYcU1iP8hW8XWQpjmkD5+7HH2BqZOjiQrV76WO5VvJdDBkxncpJEmFmHnYmmBAEEzIfCE3JQUJjHi5o5PuFB+QDqUeEmrRInJJ6RyScirDiU0SN2W6Y7wGx/kArc2ATnAlhdwRyCllVwCyA3sklV22yiGQwAlZ/wJO3m2RVVEtpJGHv0+qZ5AeNiScZl3AFqeNMYvHg3xcYBQl62Jmtaans1LIDbl8EZWQDj37uEDXM+uWyBBiFoEQklWxx17sWkhkCQ9jZJAJOtio7EosHIKw+IDEkgmhPoqnc3ZZIYOkEs2m/biF/iM5o1D+zyxiCWTZreOMZnh+jy92HaSOmhDQkDhwhniaiA5fLj/m7EQBDF1jQudClkEm1DiZkByROu6yxuWwmW1gnBwSe3cGiZyX7CL4yNJob6eS0zM1skasKYOkyuszkuPVxgW2kGCcHhLNbzJI9DWVqBq5EfLv2YifEGUzHkwpgYxIB5c5Pt55GuC51BxZMv4oSBNvI+D6OBuwFVQzkZEMgmJIOut8lhJyhixJcgyjU2f5o88Lif4h63ccPdQu3XpjQy5bl4FGFBHkdkJPUzOr43kVQDvyODdmFinnhUTRX84vb6jelEk86m2XwRBSa/4hegCVwJjLfOG6nJrMz0UUyVzxYc0479BWeEjIwuK8kCTpczGMeiSJIXZIb1z2iFa4ilC6YLxIpHBG+cKVn5QV4TvHtgVGsIzI4i6fIp4XktTV4GQ3nrpkmoKzOG4Mc07W8BPu5FqDYHEcj5o+AjpTXb4beGZIMvlKz+1SU1u8p7xNGwBdtCuCIQWWFAln/9xJfr4mX2udGdKT5HA0Ucz5xQLLNIzNcrHcoNUl3o5tYIyRD/hD4YkKQ58Z8mYsfM0f4K4Sp3oGqaVNMvGt9q4CGdQWg+B3XdL+q4A6NyT/QyRlXbzmkL2gilpfg2jazCb+qrrHMNS8j4H0nSolaV0kDqV3PIhKEUfGhtvgTThKAFEi27ND3vgxt/sCbLIoDieCrKRgQGaBIr7UsQ2wY1crmWYxPYKaOu7AydL8XJDZMxC0MaHD3FVcTQzW1On8nCrgDAxWum1MNuO1eE8/iQfF8AGgEZFlqW/rRWW77Ix9A32AenGjPE+xYnfs8r98Qbix0anRGid6L1vzL7XjHaE0skPDqfyozHqn6W7ZNuDakzkN4Fu86u/CzJZBaobJJmGugocq+7IPfOYDyX/k1MLG+Kvs3GAyFd9ps5Jp+j1wgin3aM//AdElPFBZXrHXAAAAAElFTkSuQmCC",
    name: "Dominos Pizza",
    detailInfo: ["Italy", "Pizza", "Fast food"],
    delivery: "30-45 Min",
    fee: "$7.99 Delivery Fee",
  },
  {
    url:
      "https://yt3.ggpht.com/ytc/AMLnZu-vw8LUzO6TE2M1XogojVs6YNYnSNNRfBKEFr1-_A=s900-c-k-c0x00ffffff-no-rj",
    name: "Little Ceaser Pizza",
    detailInfo: ["American", "Pizza"],
    delivery: "45-50 Min",
    fee: "Free fee",
  },
  {
    url:
      "https://ik.imagekit.io/guidle/tr:w-250,h-250,c-at_least,dpr-2.625/2/5e/61/25e611ffcdff7e4c7141444bb39e40d9ad4edc6b_52208862.gif",
    name: "Starbucks",
    detailInfo: ["Cafe", "Coffee", "Dessert", "Breakfast"],
    delivery: "45-50 Min",
    fee: "$3.49 Delivery Fee",
  },

  {
    url:
      "https://www.logodesignlove.com/images/monograms/subway-monogram-01.jpg",
    name: "Subway",
    detailInfo: ["Healthy", "Salad", "Take-away", "Sandwich"],
    delivery: "45-50 Min",
    fee: "$2.49 Delivery Fee",
  },
];

export default firstData;
