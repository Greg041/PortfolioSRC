import SkillsProps from "./interfaces/skillsProps.interface";

export default function Skill(props: SkillsProps) {
  return (
    <div className="about-skill">
      <p>
        {props.skillName}
      </p>
      <hr style={{width: `${props.skillMastery}%`}} />
    </div>
  )
}