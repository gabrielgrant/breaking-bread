import { helper } from '@ember/component/helper';

export default helper(function provinceCodeToName(params/*, hash*/) {
  let prov = mapping.find(p => p.code === params[0])
  return prov ? prov.name : '';
});

var mapping = [
  {
    "code": "NL",
    "name": "Newfoundland and Labrador",
    "abbreviationEn": "N.L.",
    "abbreviationFr": "T.-N.-L.",
    "region": "Atlantic"
  },
  {
    "code": "PE",
    "name": "Prince Edward Island",
    "abbreviationEn": "P.E.I.",
    "abbreviationFr": "Î.-P.-É.",
    "region": "Atlantic"
  },
  {
    "code": "NS",
    "name": "Nova Scotia",
    "abbreviationEn": "N.S.",
    "abbreviationFr": "N.-É.",
    "region": "Atlantic"
  },
  {
    "code": "NB",
    "name": "New Brunswick",
    "abbreviationEn": "N.B.",
    "abbreviationFr": "N.-B.",
    "region": "Atlantic"
  },
  {
    "code": "QC",
    "name": "Quebec",
    "abbreviationEn": "Que.",
    "abbreviationFr": "Qc",
    "region": "Quebec"
  },
  {
    "code": "ON",
    "name": "Ontario",
    "abbreviationEn": "Ont.",
    "abbreviationFr": "Ont.",
    "region": "Ontario"
  },
  {
    "code": "MB",
    "name": "Manitoba",
    "abbreviationEn": "Man.",
    "abbreviationFr": "Man.",
    "region": "Prairies"
  },
  {
    "code": "SK",
    "name": "Saskatchewan",
    "abbreviationEn": "Sask.",
    "abbreviationFr": "Sask.",
    "region": "Prairies"
  },
  {
    "code": "AB",
    "name": "Alberta",
    "abbreviationEn": "Alta.",
    "abbreviationFr": "Alb.",
    "region": "Prairies"
  },
  {
    "code": "BC",
    "name": "British Columbia",
    "abbreviationEn": "B.C.",
    "abbreviationFr": "C.-B.",
    "region": "British Columbia"
  },
  {
    "code": "YT",
    "name": "Yukon",
    "abbreviationEn": "Y.T.",
    "abbreviationFr": "Yn",
    "region": "Territories"
  },
  {
    "code": "NT",
    "name": "Northwest Territories",
    "abbreviationEn": "N.W.T.",
    "abbreviationFr": "T.N.-O.",
    "region": "Territories"
  },
  {
    "code": "NU",
    "name": "Nunavut",
    "abbreviationEn": "Nvt.",
    "abbreviationFr": "Nt",
    "region": "Territories"
  }
];
