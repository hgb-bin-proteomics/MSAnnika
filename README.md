# MS Annika

MS Annika is a crosslink search engine based on [MS Amanda](https://dx.doi.org/10.1021/pr500202e), aimed at identifying crosslinks of MS2-cleavable crosslinkers from MS2 and MS3 spectra.

You can read more about MS Annika [here](https://ms.imp.ac.at/?action=ms-annika), [here](https://doi.org/10.1021/acs.jproteome.0c01000) and [here](https://doi.org/10.1021/acs.jproteome.3c00325).

**This repository contains the latest release versions of MS Annika.**

- Latest MS Annika 2.0 [version](https://raw.githubusercontent.com/hgb-bin-proteomics/MSAnnika/master/releases/latest/PD3.1/version.txt) for Proteome Discoverer 3.1: [**download**](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/releases/latest/PD3.1/latest.zip)
- Latest MS Annika 2.0 [version](https://raw.githubusercontent.com/hgb-bin-proteomics/MSAnnika/master/releases/latest/PD3.0/version.txt) for Proteome Discoverer 3.0: [**download**](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/releases/latest/PD3.0/latest.zip)
- Latest MS Annika 2.0 [version](https://raw.githubusercontent.com/hgb-bin-proteomics/MSAnnika/master/releases/latest/PD2.5/version.txt) for Proteome Discoverer 2.5: [**download**](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/releases/latest/PD2.5/latest.zip)
- Latest MS Annika [version](https://raw.githubusercontent.com/hgb-bin-proteomics/MSAnnika/master/releases/latest/PD2.4/version.txt) for Proteome Discoverer 2.4: [**download**](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/releases/latest/PD2.4/latest.zip)
- Latest MS Annika [version](https://raw.githubusercontent.com/hgb-bin-proteomics/MSAnnika/master/releases/latest/PD2.3/version.txt) for Proteome Discoverer 2.3: [**download**](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/releases/latest/PD2.3/latest.zip)

A list of changes in every version can be found in [HISTORY.md](https://github.com/hgb-bin-proteomics/MSAnnika/blob/master/HISTORY.md).

## Tutorial

A tutorial of how to use MS Annika 2.0 can be found here: [Text](https://github.com/hgb-bin-proteomics/MSAnnika/blob/master/tutorial/MS_Annika_2.0_Tutorial.pdf) / [Video](https://www.youtube.com/watch?v=L1lVt35PYv4)

## Example Files

Example files to try MS Annika 2.0 can either be downloaded from [PRIDE](https://www.ebi.ac.uk/pride/archive/projects/PXD041955) or directly here:
- Minimal example for MS2 search: [MGF + fasta](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/examples/data.zip)
- RAW file for MS3 search: [RAW](https://ftp.pride.ebi.ac.uk/pride/data/archive/2023/08/PXD041955/20211219_Eclipse_LC4_G2_Trap_backflash_Peplib20_DSSO_pl1_MS3_OTOTOT.raw)

## Example Workflows

Example workflows that can be used in Proteome Discoverer*:

- Proteome Discoverer 3.0 / 3.1:
  - DSSO MS2 search (CID, ETD, HCD, stepped HCD): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_MS2.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_MS2.zip)
  - DSSO MS2-MS3 search (MS3 recorded in the orbitrap): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_MS2_MS3_Orbitrap.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_MS2_MS3_Orbitrap.zip)
  - DSSO MS2-MS3 search (MS3 recorded in the ion trap): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_MS2_MS3_Iontrap.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_MS2_MS3_Iontrap.zip)
  - DSBSO MS2 search (CID, ETD, HCD, stepped HCD): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSBSO_MS2.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSBSO_MS2.zip)
  - DSBSO MS2-MS3 search (MS3 recorded in the orbitrap): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSBSO_MS2_MS3_Orbitrap.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSBSO_MS2_MS3_Orbitrap.zip)
  - DSBSO MS2-MS3 search (MS3 recorded in the ion trap): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSBSO_MS2_MS3_Iontrap.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSBSO_MS2_MS3_Iontrap.zip)
- Proteome Discoverer 2.5:
  - DSSO MS2 search (CID, ETD, HCD, stepped HCD): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD2.5/DSSO_MS2.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD2.5/DSSO_MS2.zip)
  - DSSO MS2-MS3 search (MS3 recorded in the orbitrap): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD2.5/DSSO_MS2_MS3_Orbitrap.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD2.5/DSSO_MS2_MS3_Orbitrap.zip)
  - DSSO MS2-MS3 search (MS3 recorded in the ion trap): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD2.5/DSSO_MS2_MS3_Iontrap.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD2.5/DSSO_MS2_MS3_Iontrap.zip)

The general processing workflow for almost any crosslink search is depicted [here](workflows/general_wf.png).

For MS2 searches (CID, ETD, HCD, stepped HCD) it can also be beneficial to employ the [IMP MS2 Spectrum Processor]() node, an example workflow for Proteome Discoverer 3.0 is given here: [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_IMP_MS2.zip) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_IMP_MS2.zip)  
This workflow requires the installation of the [IMP MS2 Spectrum Processor](https://ms.imp.ac.at/?action=spectrum-processor) node beforehand, direct download here: [IMP MS2 Spectrum Processor](https://ms.imp.ac.at/?file=spectrum-processor/ms2spectrumprocessor_3.0.zip)

\*The provided workflows also require the installation of [MS Amanda](https://dx.doi.org/10.1021/pr500202e) which can be downloaded [here](https://ms.imp.ac.at/?action=ms-amanda).

## Support for MGF and timsTOF Data

The following MS Annika versions support MGF\* and timsTOF\*\* data input:
- Proteome Discoverer 3.1: [MS Annika 2.0 v2.2.1](https://github.com/hgb-bin-proteomics/MSAnnika/releases/tag/v2.2.1)
- Proteome Discoverer 3.0: [MS Annika 2.0 v1.1.4fix](https://github.com/hgb-bin-proteomics/MSAnnika/releases/tag/v1.1.4fix)
- Proteome Discoverer <=2.5: [MS Annika 1.0 v1.0.0](https://github.com/hgb-bin-proteomics/MSAnnika/releases/tag/v1.0.0)\*\*\*

\*MS Annika 2.0 only supports MS2 search for MGF files since MGF files don't contain sufficient MS3 information.  
\*\*requires installation of the Bruker Ion Mobility reader.  
\*\*\*requires installation of the [IMP MS2 Spectrum Processor](https://ms.imp.ac.at/?action=spectrum-processor) node.

## Known Issues

[List of known issues](https://github.com/hgb-bin-proteomics/MSAnnika/issues)

## Citing

If you are using MS Annika please cite:
```
MS Annika 2.0 Identifies Cross-Linked Peptides in MS2–MS3-Based Workflows at High Sensitivity and Specificity
Micha J. Birklbauer, Manuel Matzinger, Fränze Müller, Karl Mechtler, and Viktoria Dorfer
Journal of Proteome Research 2023 22 (9), 3009-3021
DOI: 10.1021/acs.jproteome.3c00325
```
or
```
MS Annika: A New Cross-Linking Search Engine
Georg J. Pirklbauer, Christian E. Stieger, Manuel Matzinger, Stephan Winkler, Karl Mechtler, and Viktoria Dorfer
Journal of Proteome Research 2021 20 (5), 2560-2569
DOI: 10.1021/acs.jproteome.0c01000
```

## Contact

- [micha.birklbauer@fh-hagenberg.at](mailto:micha.birklbauer@fh-hagenberg.at)
