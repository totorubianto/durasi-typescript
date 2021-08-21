const DETIK = 1;
const MENIT = DETIK * 60;
const JAM = MENIT * 60;
const HARI = JAM * 24;
const TAHUN = HARI * 365;

const durasi: (duration: number) => string = (duration) => {
  let remain = duration;
  let res: Array<string> = [];
  if (remain < 0) throw new Error(`Duration can't be negatif number`);
  if (remain === 0) return "Sekarang";

  while (remain > 0) {
    switch (true) {
      case remain >= TAHUN: {
        res.push(`${Math.floor(remain / TAHUN)} Tahun`);
        remain %= TAHUN;
        break;
      }
      case remain >= HARI: {
        res.push(`${Math.floor(remain / HARI)} Hari`);
        remain %= HARI;
        break;
      }
      case remain >= JAM: {
        res.push(`${Math.floor(remain / JAM)} Jam`);
        remain %= JAM;
        break;
      }
      case remain >= MENIT: {
        res.push(`${Math.floor(remain / MENIT)} Menit`);
        remain %= MENIT;
        break;
      }
      case remain >= DETIK: {
        res.push(`${remain} Detik`);
        remain = 0;
        break;
      }
      default:
        break;
    }
  }
  return res.length > 1
    ? `${res.slice(0, res.length - 1).join(", ")} dan ${res[res.length - 1]}`
    : res.join();
};

export default durasi;
