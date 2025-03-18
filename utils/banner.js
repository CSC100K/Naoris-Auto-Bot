import chalk from 'chalk';

const banner = () => {
  const text = `            
     📢  Telegram Channel: https://t.me/BTC99M`;
  
  const separator = "═".repeat(60);
  return `${chalk.cyan(text)}\n${chalk.white(separator)}`;
};

export default banner;