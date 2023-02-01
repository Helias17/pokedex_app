import { useState } from "react";
import css from "./pokemonInfo.module.scss";

const initialTabs = [
  { id: 1, name: "About", active: false },
  { id: 2, name: "Base Stats", active: true },
  { id: 3, name: "Evolution", active: false },
  { id: 4, name: "Moves", active: false },
];

type baseStatsType = {
  name: string;
  value: number;
};

type aboutType = {
  name: string;
  value: string | number;
};

type PokemonInfoProps = {
  baseStats: baseStatsType[];
  about: aboutType[];
  moves: string[];
};

export const PokemonInfo = ({ baseStats, about, moves }: PokemonInfoProps) => {
  const [tabs, setTabs] = useState(initialTabs);

  const handleClickTab = (id: number) => {
    setTabs((prevState) => {
      return [...prevState].map((tabItem) => {
        if (tabItem.id === id) {
          tabItem.active = true;
        } else tabItem.active = false;
        return tabItem;
      });
    });
  };

  return (
    <div className={css.info}>
      <div className={css.info__container}>
        <ul className={css.info__tabs}>
          {tabs.map((tabItem) => (
            <li
              key={tabItem.name}
              className={`${css.info__tabsItem} ${
                tabItem.active && css.info__tabsItem_active
              }`}
              onClick={() => handleClickTab(tabItem.id)}
            >
              {tabItem.name}
            </li>
          ))}
        </ul>

        {tabs[0].active && (
          <table border={0} width="100%">
            <tbody>
              {about.map((aboutItem) => (
                <tr key={aboutItem.name}>
                  <td className={css.info__statsName}>{aboutItem.name}</td>
                  <td className={css.info__statsValue}>{aboutItem.value}</td>
                  <td className={css.info__statsChart}></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {tabs[1].active && (
          <table border={0} width="100%">
            <tbody>
              {baseStats.map((statItem) => (
                <tr key={statItem.name}>
                  <td className={css.info__statsName}>{statItem.name}</td>
                  <td className={css.info__statsValue}>{statItem.value}</td>
                  <td className={css.info__statsChart}>
                    <div className={css.info__statsLine}>
                      <div
                        className={css.info__statsLineInner}
                        style={{
                          width: `${statItem.value}%`,
                          backgroundColor: `${
                            statItem.value < 70 ? "#DD6571" : "#7FC99B"
                          }`,
                        }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {tabs[2].active && <p>Pokemon evolution info</p>}
        {tabs[3].active && (
          <p>
            {moves.map((moveItem, index) => (
              <span key={index} className={css.info__moveItem}>
                {moveItem}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};
