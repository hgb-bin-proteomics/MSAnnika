# Example Workflows

Example workflows that can be used in Proteome Discoverer:

## Proteome Discoverer 3.0 / 3.1 / 3.2 / 3.3 / 3.4

- DSS/BS3 MS2 search (CID, ETD, HCD, stepped HCD): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.1/DSS.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.1/DSS.zip)
- DSS/BS3 MS2 search (for large datasets and proteome-wide searches, CID, ETD, HCD, stepped HCD): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.1/DSS_big.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.1/DSS_big.zip)
- DSSO MS2 search (CID, ETD, HCD, stepped HCD): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_MS2.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_MS2.zip)
- DSSO MS2-MS3 search (MS3 recorded in the orbitrap): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_MS2_MS3_Orbitrap.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_MS2_MS3_Orbitrap.zip)
- DSSO MS2-MS3 search (MS3 recorded in the ion trap): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_MS2_MS3_Iontrap.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_MS2_MS3_Iontrap.zip)
- DSBSO MS2 search (CID, ETD, HCD, stepped HCD): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSBSO_MS2.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSBSO_MS2.zip)
- DSBSO MS2-MS3 search (MS3 recorded in the orbitrap): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSBSO_MS2_MS3_Orbitrap.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSBSO_MS2_MS3_Orbitrap.zip)
- DSBSO MS2-MS3 search (MS3 recorded in the ion trap): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSBSO_MS2_MS3_Iontrap.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSBSO_MS2_MS3_Iontrap.zip)

## Proteome Discoverer 2.5

- DSSO MS2 search (CID, ETD, HCD, stepped HCD): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD2.5/DSSO_MS2.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD2.5/DSSO_MS2.zip)
- DSSO MS2-MS3 search (MS3 recorded in the orbitrap): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD2.5/DSSO_MS2_MS3_Orbitrap.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD2.5/DSSO_MS2_MS3_Orbitrap.zip)
- DSSO MS2-MS3 search (MS3 recorded in the ion trap): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD2.5/DSSO_MS2_MS3_Iontrap.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD2.5/DSSO_MS2_MS3_Iontrap.zip)

## General Remarks

The provided workflows also require the installation of [MS Amanda](https://dx.doi.org/10.1021/pr500202e) which can be downloaded [here](https://ms.imp.ac.at/?action=ms-amanda).

The general processing workflow for almost any crosslink search is depicted [here](https://github.com/hgb-bin-proteomics/MSAnnika/blob/master/workflows/general_wf.png).

For MS2 searches (CID, ETD, HCD, stepped HCD) it can also be beneficial to employ the [IMP MS2 Spectrum Processor](https://ms.imp.ac.at/?action=spectrum-processor) node, an example workflow for Proteome Discoverer 3.0 is given here:

- DSSO MS2 search with IMP MS2 Spectrum Processor: [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_IMP_MS2.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_IMP_MS2.zip)

This workflow additionally requires the installation of the [IMP MS2 Spectrum Processor](https://ms.imp.ac.at/?action=spectrum-processor) node beforehand, which can be directly downloaded from [here (Proteome Discoverer 3.0)](https://ms.imp.ac.at/?file=spectrum-processor/ms2spectrumprocessor_3.0.zip) or [here (Proteome Discoverer 3.3)](https://ms.imp.ac.at/?file=software_new/IMP.SpectrumProcessorNode/v1.0.3/PD3.3/PD3.3.zip).

> [!Note]
>
> When starting these workflows you might get a warning in Proteome Discoverer that certain parameters do not exist,
> even though all parameters are set in the workflow. This is because of different MS Annika versions that have different
> parameter sets. You can safely ignore these warnings!

## Thermo Fisher Scientific Workflows

We have also tested some workflows together with researchers from Thermo Fisher Scientific specifically (but not exclusively) for Astral and Astral Zoom instruments (please also refer to the sections for Astral data). You can find the workflows that we came up with and that yielded the best results for our test setup at this directory [here](https://github.com/hgb-bin-proteomics/MSAnnika/tree/develop/workflows/thermo).

The workflows require that you have a licensed version of Proteome Discoverer and access to the `Spectrum Files RC` node. We found recalibration to improve results significantly!

> [!Important]
>
> Please set crosslink and linear peptide modifications accordingly in these workflows, they are not preset!
